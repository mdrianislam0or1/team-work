import { configureStore } from '@reduxjs/toolkit';
import carReducer  from '../features/Car/CarSlice'

export const store = configureStore({
  reducer: {
    cars : carReducer
  },
});
