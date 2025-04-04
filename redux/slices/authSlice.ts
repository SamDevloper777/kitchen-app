import { createSlice } from "@reduxjs/toolkit";

interface authState {
  access_token?: string;
  refresh_token?: string;
  user?: {
    id: number | string; // TODO: Change to string if UUID is implemented by the Django API...
    email: string;
    username: string;
    role: string;
  };
}

const initialState: authState = {
  access_token: undefined, // Initializing the tokens to undefined, but we will set it to a real value after successful login
  refresh_token: undefined,
  user: {
    id: 0, // int as per the current API
    email: "",
    username: "",
    role: "",
  },
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { access_token, refresh_token, user } = action.payload;
      state.access_token = access_token;
      state.refresh_token = refresh_token;
      state.user = user;
    },
    logout: (state) => {
      state.access_token = undefined;
      state.refresh_token = undefined;
      state.user = {
        id: 0,
        email: "",
        username: "",
        role: "",
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;