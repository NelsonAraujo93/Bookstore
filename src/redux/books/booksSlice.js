import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  bookList: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      const newObject = {
        title: action.payload.title,
        author: action.payload.author,
        id: uuidv4(),
      };
      state.bookList.push(newObject);
    },
    remove: (state, action) => {
      state.bookList.filter((books) => (
        books.id !== action.payload.id
      ));
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
