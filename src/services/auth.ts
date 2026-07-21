export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  user: User;
}

export async function login(
  data: LoginData
): Promise<LoginResponse> {
  console.log("Login Request:", data);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        token: "fake-jwt-token",
        user: {
          id: 1,
          name: "Alaa Shamel",
          email: data.email,
        },
      });
    }, 1000);
  });
}

export async function register(data: RegisterData) {
  console.log("Register Request:", data);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
      });
    }, 1000);
  });
}