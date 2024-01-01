import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { axiosInstances, serviceProps } from '../../envConfig';
import MockResponse from '../../utils/MockResponse';
import { mockResonseFlag } from '../../utils/Utility';


// Async Thunks
export const loginAsync = createAsyncThunk('auth/login', async (credentials) => {
  try {
    console.log("in side login aciton");
    let inputRequestBody = credentials;
    let inputHeader = null;
    let serviceURLInstance  = axiosInstances.service;

    const serviceUri = serviceProps.authService.loginService.uri;

    if(mockResonseFlag){
        return MockResponse.userLoggedIn.response.payload.records[0];
    }
    else {
       const response =  await serviceURLInstance.post(serviceUri, inputRequestBody);
       return response.data.user;
    }
  } 
  catch (error) {
    console.log("catch err");
    throw error.response.data.error || 'Login failed';
  }
});

export const logoutAsync = createAsyncThunk('auth/logout', async () => {
  try {
    let serviceURLInstance  = axiosInstances.service;

    const serviceUri = serviceProps.authService.logoutService.uri;

    const response = await serviceURLInstance.get(serviceUri);
    return response.data;
  } 
  catch (error) {
    throw 'Logout failed';
  }
});

export const signupAsync = createAsyncThunk('auth/signup', async (userData) => {
  try {
    console.log('in side signup action');
    let serviceURLInstance  = axiosInstances.service;
    let inputRequestBody = userData;
    let inputHeader = null;
    const serviceUri = serviceProps.authService.signupService.uri;

    if(mockResonseFlag){
        return MockResponse.userLoggedIn.response.payload.records[0];
    }
    else {
        const response = await serviceURLInstance.post(serviceUri, inputRequestBody);
        return response.data.user;
    }
    
  } 
  catch (error) {
    throw error.response.data.message || 'Signup failed';
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
