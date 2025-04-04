import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import menuService from './menuService';

const initialState = {
  menus: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

// Create new menu item
export const createMenu = createAsyncThunk(
  'menu/create',
  async (menuData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await menuService.createMenu(menuData, token);
    } catch (error) {
      const message = (error.response && 
                      error.response.data && 
                      error.response.data.message) || 
                      error.message || 
                      error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get menu items
export const getMenus = createAsyncThunk(
  'menu/getAll',
  async (_, thunkAPI) => {
    try {
      return await menuService.getMenus();
    } catch (error) {
      const message = (error.response && 
                      error.response.data && 
                      error.response.data.message) || 
                      error.message || 
                      error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get menu items by category
export const getMenusByCategory = createAsyncThunk(
  'menu/getByCategory',
  async (categoryId, thunkAPI) => {
    try {
      return await menuService.getMenusByCategory(categoryId);
    } catch (error) {
      const message = (error.response && 
                      error.response.data && 
                      error.response.data.message) || 
                      error.message || 
                      error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMenu.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMenu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.menus.push(action.payload);
      })
      .addCase(createMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getMenus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMenus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.menus = action.payload;
      })
      .addCase(getMenus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getMenusByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMenusByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.menus = action.payload;
      })
      .addCase(getMenusByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const { reset } = menuSlice.actions;
export default menuSlice.reducer;