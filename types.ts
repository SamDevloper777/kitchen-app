// types.ts
export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  token?: string;
}
export interface OtpVerifyPayload {
  email: string;
  otp: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  token: string | null;
  isAuthenticated: boolean;
  isRegistered: boolean;
  error: string | null;
}
