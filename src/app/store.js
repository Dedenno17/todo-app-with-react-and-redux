import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../features/item';

export const store = configureStore({
  reducer: {
    item: itemReducer,
  },
});
