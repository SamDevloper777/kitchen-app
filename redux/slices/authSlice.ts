// authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthState, RegisterPayload, OtpVerifyPayload, User } from '../../types';
import { endpoints } from '@/config/urls';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData: RegisterPayload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("http://127.0.0.1:8000/api/user/register/owner/", userData);
      if (data.error) {
        return rejectWithValue(data.error);
      }
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 
        error.response?.data?.error || 
        'Registration failed. Please try again.'
      );
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async (payload: OtpVerifyPayload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(endpoints.VERIFY_OTP, payload);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'OTP Verification failed');
    }
  }
);

const initialState: AuthState = {
  user: null,
  loading: false,
  token: null,
  isAuthenticated: false,
  isRegistered: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;
      state.isRegistered = false;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.isRegistered = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload as User;
        state.token = (action.payload as User).token || null;
        state.isAuthenticated = true;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;