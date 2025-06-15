import { create } from "zustand";
import axios,{ isAxiosError } from "axios";
import { authdataSource } from "../../data/datasource/data_source";
import { User, ApiResponse, LoginResponse, RegisterResponse } from "../../data/model/userModel";

import useToastStore from "@/core/state/toastStore";


interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
  isLoading: boolean;

  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  error: null,
  isLoading: false,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authdataSource.login(email, password);
      const { user, token } = response.data;

      set({
        isAuthenticated: true,
        user: {
          ...user,
          token, // Add token to user object
        },
        error: null,
        isLoading: false,
      });

      localStorage.setItem("authToken", token);
    } catch (error) {
      let errorMessage = "Login failed";
      if (isAxiosError(error) && error.response) {
        errorMessage = (error.response.data as ApiResponse<unknown>).message || errorMessage;
      }
      set({ error: errorMessage, isLoading: false });
    }
  },

  register: async (name, email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authdataSource.register(name, email, password);
      const { user } = response.data;

      set({
        isAuthenticated: true,
        user: {
          ...user,
          token: "", // No token on registration
        },
        error: null,
        isLoading: false,
      });

      useToastStore.getState().addToast(response.message, "success");
    } catch (error) {
      let errorMessage = "Registration failed";
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = (error.response.data as ApiResponse<unknown>).message || errorMessage;
      }
      set({ error: errorMessage, isLoading: false });
      useToastStore.getState().addToast(errorMessage, "error");
    }
  },

  logout: () => {
    set({
      isAuthenticated: false,
      user: null,
      error: null,
    });
    localStorage.removeItem("authToken");
  },
}));

export default useAuthStore;