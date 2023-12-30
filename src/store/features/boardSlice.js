import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import MockResponse from '../../utils/MockResponse';
import { mockResonseFlag } from '../../utils/Utility';
import axios from 'axios';

export const createBoardAsync = createAsyncThunk('board/create', async(data) =>{
    try {
        console.log('in side create board action');
        if(mockResonseFlag){
            return MockResponse.boardCreated.response.payload.records[0];
        }
        else{
            const response = await axios.post('/createBoard', data);
            return response.payload.records[0];
        }
    }
    catch(error) {
        throw error.response.data.message || 'Login failed';
    }
});

export const getAllBoardAsync = createAsyncThunk('board/allBoard', async() => {
    try {
        if(mockResonseFlag){
            console.log('in side get all board action');
            return MockResponse.getAllBoard.response.payload.records[0];
        }
        else {
            const response = await axios.get('/getAllBoard');
            return response.payload.records[0]; 
        }
    }
    catch(error) {
        throw error.response.data.message || 'get all board failed';
    }
});

export const getBoardByIdAsync = createAsyncThunk('board/boardById', async(boardId) => {
    try {
        if(mockResonseFlag){
            console.log('in side get all board action');
            return MockResponse.getBoardById.response.payload.records[0];
        }
        else {
            const response = await axios.get(`/getBoardById?id=${boardId}`);
            return response.payload.records[0]; 
        }
    }
    catch(error) {
        throw error.response.data.message || 'get all board failed';
    }
});

const boardSlice = createSlice({
    name: 'board',
    initialState: {
        boardCreated : null,
        getAllBoard: null,
        getBoardById: null,
        error: null,
    },
    reducers : {
        clearError : (state) => {
            state.error = null;
        },
        clearBoardState: (state, action) => {
            state[action.payload] = null;
        }
    },
    extraReducers: (builder) =>{
        builder
            .addCase(createBoardAsync.fulfilled, (state, action) =>{
                state.boardCreated = action.payload;
                state.error = null;
            })
            .addCase(createBoardAsync.rejected, (state,action) => {
                state.boardCreated = null;
                state.error = action.error.message || 'create board failed';
            })
            .addCase(getAllBoardAsync.fulfilled, (state, action) => {
                state.getAllBoard = action.payload;
                state.error = null;
            })
            .addCase(getAllBoardAsync.rejected, (state, action) => {
                state.getAllBoard = null;
                state.error = action.error.message || 'get all board failed';
            })
            .addCase(getBoardByIdAsync.fulfilled, (state, action) => {
                state.getBoardById = action.payload;
                state.error = null;
            })
            .addCase(getBoardByIdAsync.rejected, (state, action) => {
                state.getBoardById = null;
                state.error = action.error.message || 'get all board failed';
            })
    },
});

export const {clearError, clearBoardState} = boardSlice.actions;

export default boardSlice.reducer;