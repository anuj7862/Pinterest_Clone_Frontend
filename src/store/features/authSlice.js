import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import MockResponse from '../../utils/MockResponse';

const mockResonseFlag = true;

// Async Thunks
export const loginAsync = createAsyncThunk('auth/login', async (credentials) => {
  try {
    console.log(credentials);
    if(mockResonseFlag){
        return MockResponse.userLoggedIn.response.payload.records[0];
    }
    else {
        const response = await axios.post('/login', credentials);
        return response.payload.records[0];
    }
  } 
  catch (error) {
    throw error.response.data.message || 'Login failed';
  }
});

export const logoutAsync = createAsyncThunk('auth/logout', async () => {
  try {
    const response = await axios.post('/logout', credentials);
    return response.data;
  } 
  catch (error) {
    throw 'Logout failed';
  }
});

export const signupAsync = createAsyncThunk('auth/signup', async (userData) => {
  try {
    console.log(userData);
    if(mockResonseFlag){
        return MockResponse.userLoggedIn.response.payload.records[0];
    }
    else {
        const response = await axios.post('/signup', userData);
        return response.payload.records[0];
    }
    
  } 
  catch (error) {
    throw error.response?.data.message || 'Signup failed';
  }
});

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
    //   .addCase(loginAsync.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      })
      .addCase(logoutAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
        state.error = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.error.message || 'Logout failed';
      })
      .addCase(signupAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.error.message || 'Signup failed';
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
