import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  storageContact,
  filterContact,
} from '../actions/contactAction';

const removeContact = (state, { payload }) =>
  state.filter(contact => contact.id !== payload);

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: removeContact,
  [storageContact]: (state, { payload }) => payload,
});

const filter = createReducer('', {
  [filterContact]: (state, { payload }) => (state = payload),
});

export { items, filter };
