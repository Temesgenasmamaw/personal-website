import axios, { isCancel, AxiosError } from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import https from "https";
import fs from "fs";

interface CustomJwtPayload {
  _id: string; // Unique identifier for the user
  email: string;
  role: string;
  exp: number;
}

// Create axios instance
const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: true,
});

const decodeToken = (token: string | undefined) => {
  if (!token) {
    console.warn("No token provided.");
    return null;
  }

  try {
    return jwtDecode<CustomJwtPayload>(token);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("_________Request____________:", config);
    const token = Cookies.get("token"); // Retrieve token from cookies
    // const accessToken=localStorage.getItem('token') || ''; // Retrieve token from localStorage
    console.log("Interceptor - Token:", token);
    if (token) {
      // Decode the token to get user info
      const decoded = decodeToken(token);

      if (decoded) {
        const { email, role } = decoded;

        // Add Authorization header with the token
        config.headers["Authorization"] = `Bearer ${token}`;
        console.log("Interceptor - Headers:", config.headers);
        if (config.method === "get" && config.params) {
          config.params = { ...config.params, email, role }; // Attach email and role in query params for GET requests
        }
      } else {
        console.warn("No token found in cookies.");
      }
    }
    return config;
  },
  (error) => {
    console.error("Interceptor request error:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token expiration and session expiration
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  }, // Return the response if no error
  async (error) => {
    const refreshToken = Cookies.get("refreshToken"); // Retrieve refresh token from cookies

    console.log("Error Response:", error.response);
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to login...");

      // Optional: Add redirect logic here (e.g., router.push("/login") if using Next.js)
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
