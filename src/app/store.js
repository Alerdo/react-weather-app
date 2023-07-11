import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/main/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
