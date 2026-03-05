export interface RegistrationRequest {
  username: string;
  password: string;
  email: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface ApiResponse {
  message: string;
  token?: string;
}