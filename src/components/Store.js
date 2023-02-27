import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counterSlice';

const Store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default Store;
