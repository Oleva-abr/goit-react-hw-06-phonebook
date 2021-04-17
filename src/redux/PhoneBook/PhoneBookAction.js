import { ADDCONTACT, FILTERCONTACTS, REMOVECONTACT } from '../types/types';

const addContact = item => {
  return {
    type: ADDCONTACT,
    payload: item,
  };
};

const removeContact = id => {
  return {
    type: REMOVECONTACT,
    payload: id,
  };
};
const filterContacts = value => {
  return {
    type: FILTERCONTACTS,
    payload: value,
  };
};
