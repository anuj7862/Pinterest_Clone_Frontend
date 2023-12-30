import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import pinReducer from './features/pinSlice';
import boardReducer from './features/boardSlice';
import tagReducer from './features/tagSlice';

const store = configureStore({
  reducer: {
    auth : authReducer,
    pin: pinReducer,
    board: boardReducer,
    tag: tagReducer,
  },
});

export default store;