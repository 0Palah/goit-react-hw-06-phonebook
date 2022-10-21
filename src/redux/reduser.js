import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './constants/slice.contacts';
import { filterReducer } from './filter/slice.filter';

export const rootReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
