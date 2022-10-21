import { configureStore } from '@reduxjs/toolkit';
import { initialState } from './initial-state';
import { rootReduser } from './reduser';

export const store = configureStore({
  reducer: rootReduser,
  initialState,
  devTools: process.env.NODE_ENV === 'development',
});
