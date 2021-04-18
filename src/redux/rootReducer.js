import { combineReducers } from 'redux';
import { phoneBookReducer } from './phoneBook/phoneBookReducer';

const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
});

export default rootReducer;
