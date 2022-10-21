import { configureStore, createReducer } from '@reduxjs/toolkit';

const contactsReducer = createReducer([], {});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
