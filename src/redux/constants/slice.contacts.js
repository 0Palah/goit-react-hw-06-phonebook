import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initiale-state.contacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContactAction: (state, action) => {
      console.log(state);
      state.contacts.unshift(action.payload);
    },
    deleteContactAction: (state, action) => {
      state.contacts = state.contacts.filter(
        user => user.id !== action.payload
      );
    },
  },
});

console.log(contactsSlice);
export const contactsReducer = contactsSlice.reducer;
export const { addContactAction, deleteContactAction } = contactsSlice.actions;
