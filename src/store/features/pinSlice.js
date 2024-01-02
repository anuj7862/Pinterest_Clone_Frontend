import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import MockResponse from '../../utils/MockResponse';
import { mockResonseFlag } from '../../utils/Utility';
import { axiosInstances, serviceProps } from '../../envConfig';

export const createPinAsync = createAsyncThunk('pin/create', async(data) => {
    try {
        console.log('in side create pin action');
        let inputRequestBody = data;
        let inputHeader = null;
        let serviceURLInstance  = axiosInstances.service;

        const serviceUri = serviceProps.pinService.createPin.uri;
        if(mockResonseFlag){
            console.log('mock');
            return MockResponse.pinCreated.response.payload.records[0];
        }
        else {
            const response =  await serviceURLInstance.post(serviceUri, inputRequestBody);
            return response.data;
        }
    }
    catch (error) {
        throw 'create pin failed';
    }
});

export const getAllPinAsync = createAsyncThunk('pin/allPin', async(page) => {
    try {
        console.log('in side get all pin action');
        let serviceURLInstance  = axiosInstances.service;
        const serviceUri = `${serviceProps.pinService.getAllPin.uri}?page=${page}`;

        if(mockResonseFlag){
            return MockResponse.getAllPin.response.payload.records[0];
        }
        else {
            const response =  await serviceURLInstance.get(serviceUri);
            return response.data;
        }
    }
    catch (error) {
        throw 'get all pin failed';
    }
});

const pinSlice = createSlice({
    name: 'pin',
    initialState: {
        pinCreated: null,
        getAllPin: null,
        error: null,
    },
    reducers: {
        clearError: (state) =>{
            state.error = null;
        },
        clearPinState: (state, action) => {
            state[action.payload] = null;
        }
    },
    extraReducers: (builder) =>{
        builder
            .addCase(createPinAsync.fulfilled, (state,action) => {
                state.pinCreated = action.payload;
                state.error = null;
            })
            .addCase(createPinAsync.rejected, (state,action) => {
                state.pinCreated = null;
                state.error = action.error.message || 'create pin failed';
            })
            .addCase(getAllPinAsync.fulfilled, (state,action) => {
                state.getAllPin = action.payload;
                state.error = null;
            })
            .addCase(getAllPinAsync.rejected, (state,action) => {
                state.getAllPin = null;
                state.error = action.error.message || 'get all pin failed';
            })
            
    },
});

export const {clearError, clearPinState} = pinSlice.actions;
export default pinSlice.reducer;
