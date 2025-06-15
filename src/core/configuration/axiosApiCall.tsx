import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import https from "https";
import fs from "fs";

interface CustomJwtPayload {
  _id: string; // Unique identifier for the user
  userId: string;
  role: string;
  exp: number;
}

// Create axios instance
const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api/v1/",
  withCredentials: true, // Allows cookies to be sent with requests
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false,
  // }),
});
console.log("Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL);

// Function to decode the token and retrieve user information
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

// Add a request interceptor to include headers and user information
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token"); // Retrieve token from cookies
    console.log("Interceptor - Token:", token);
    if (token) {
      // Decode the token to get user info
      const decoded = decodeToken(token);

      if (decoded) {
        const { userId, role } = decoded; // Extract userId and role from the decoded token

        // Add Authorization header with the token
        config.headers["Authorization"] = `Bearer ${token}`;
        console.log("Interceptor - Headers:", config.headers);
        // Optionally include userId and role in the query parameters for GET requests
        if (config.method === "get" && config.params) {
          config.params = { ...config.params, userId, role }; // Attach userId and role in query params for GET requests
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
  (response) => response, // Return the response if no error
  (error) => {
    if (error.response && error.response.status === 401) {
      // If unauthorized (401), handle session expiration or token invalidation
      console.error("Session expired or unauthorized. Please login again.");
      // Optional: Add redirect logic here (e.g., router.push("/login") if using Next.js)
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
