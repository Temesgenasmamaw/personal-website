// types/auth.ts
export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  profilePicture: string;
  bio: string;
  status: string;
  isLocked: boolean;
  createdDate: string;
  token?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  status?: number;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface RegisterResponse {
  user: User;
}