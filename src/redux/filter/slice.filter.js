import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './initiale-state.filter';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addFilterAction: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { addFilterAction } = filterSlice.actions;
