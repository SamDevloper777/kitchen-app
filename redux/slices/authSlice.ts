import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, verifyEmail } from "../services/authService";

// Define interfaces for the payload types
interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface VerifyOtpPayload {
  email: string;
  otp: string;
}

interface AuthState {
  email: string | null;
  registeredEmail: string | null;
  loading: boolean;
  error: string | null;
  success: boolean;
  isVerified: boolean;
}

const initialState: AuthState = {
  email: null,
  registeredEmail: null,
  loading: false,
  error: null,
  success: false,
  isVerified: false,
};

// Register thunk with proper typing
export const register = createAsyncThunk<string, RegisterPayload, { rejectValue: string }>(
  "auth/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const data = await registerUser(name, email, password);
      return email;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const verifyOtp = createAsyncThunk<any, VerifyOtpPayload, { rejectValue: string }>(
  "auth/verifyOtp",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const data = await verifyEmail(email, otp);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "OTP verification failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    resetSuccess: (state) => { 
      state.success = false;
      state.isVerified = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register cases
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.registeredEmail = action.payload;
        state.success = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Registration failed";
      })
      // Verify OTP cases
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.registeredEmail = null;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "OTP verification failed";
      });
  },
});

export const { clearError, resetSuccess } = authSlice.actions;
export default authSlice.reducer;