import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import MockResponse from '../../utils/MockResponse';
import { mockResonseFlag } from '../../utils/Utility';
import axios from 'axios';

export const getTagListAsync = createAsyncThunk('tag/tagList', async() => {
    try {
        if(mockResonseFlag){
            return MockResponse.getTagList.response.payload.records[0];
        }
        else {
            const response = await axios.get('/getTagList');
            return response.payload.records[0];
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
                state.error = action.error.message || 'create board failed';
            })
    }
});

export const {clearError, clearTagState} = tagSlice.actions;
export default tagSlice.reducer;