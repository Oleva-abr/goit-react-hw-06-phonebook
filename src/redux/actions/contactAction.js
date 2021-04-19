import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';


const addContact = createAction('@contacts/add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('@contact/delete');
const storageContact = createAction('@contact/storage');
const filterContact = createAction('@contact/filter', ({ target }) => ({
  payload: target.value,
}));

export { addContact, deleteContact, storageContact, filterContact };
