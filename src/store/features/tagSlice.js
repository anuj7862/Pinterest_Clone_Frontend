import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import MockResponse from '../../utils/MockResponse';
import { mockResonseFlag } from '../../utils/Utility';
import { axiosInstances, serviceProps } from '../../envConfig';

export const getTagListAsync = createAsyncThunk('tag/tagList', async() => {
    try {
        let serviceURLInstance  = axiosInstances.service;

        const serviceUri = serviceProps.tagTopicService.getTagTopics.uri;
        if(mockResonseFlag){
            return MockResponse.getTagList.response.payload.records[0];
        }
        else {
            const response =  await serviceURLInstance.get(serviceUri);
            return response.data;
        }
    }
    catch(error) {
        throw error.response.data.message || 'get Tag List failed';
    }
});


const tagSlice = createSlice({
    name: 'tag',
    initialState: {
        tagList : null,
        error: null,
    },
    reducers: {
        clearTagState : (state, action) =>{
            state[action.payload] = null;
        },
        clearError : (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTagListAsync.fulfilled, (state, action) => {
                state.tagList = action.payload;
                state.error = null;
            })
            .addCase(getTagListAsync.rejected, (state, action) => {
                state.tagList = null;
                state.error = action.error.message || 'get Tag topics failed';
            })
    }
});

export const {clearError, clearTagState} = tagSlice.actions;
export default tagSlice.reducer;