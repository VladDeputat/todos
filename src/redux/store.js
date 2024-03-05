import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todos/slice';

export const store = configureStore({
  'reducer': {
    'todo': todoSlice.reducer,
  },
});
