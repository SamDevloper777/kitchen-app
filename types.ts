// redux/types.ts
export interface User {
    id: string;
    email: string;
    token: string;
  }
  
  export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
  }
  
  export interface RegisterPayload {
    email: string;
    password: string;
  }
  