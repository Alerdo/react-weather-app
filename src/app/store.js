import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/main/mainSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
