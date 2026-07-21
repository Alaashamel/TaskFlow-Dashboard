import axiosClient from "../lib/axios";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export const loginApi = async (data: LoginRequest) => {
  const response = await axiosClient.post("/auth/login", data);
  return response.data;
};

export const registerApi = async (data: RegisterRequest) => {
  const response = await axiosClient.post("/auth/register", data);
  return response.data;
};