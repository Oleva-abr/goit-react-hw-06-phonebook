import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: { phoneBook: rootReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
