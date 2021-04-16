import { combineReducers } from 'redux';
import { phoneBookReducer } from './PhoneBook/PhoneBookReducer';

const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
});

export default rootReducer;
