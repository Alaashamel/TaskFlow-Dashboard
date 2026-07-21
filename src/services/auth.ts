export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export async function login(data: LoginData) {
  console.log("Login Request:", data);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        token: "fake-jwt-token",
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