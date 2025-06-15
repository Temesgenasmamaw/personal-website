import axios from "axios";
import {
  ApiResponse,
  LoginResponse,
  RegisterResponse,
} from "../model/userModel";

export const authdataSource = {
  login: async (
    email: string,
    password: string
  ): Promise<ApiResponse<LoginResponse>> => {
    const response = await axios.post<ApiResponse<LoginResponse>>(
      "/api/v1/user/login",
      {
        email,
        password,
      }
    );
    console.log("Login response:", response.data);
    return response.data;
  },
  register: async (
    name: string,
    email: string,
    password: string
  ): Promise<ApiResponse<RegisterResponse>> => {
    const response = await axios.post<ApiResponse<RegisterResponse>>(
      "/api/v1/user/createUser",
      {
        name,
        email,
        password,
      }
    );
    console.log("Register response:", response.data);
    return response.data;
  },
};
