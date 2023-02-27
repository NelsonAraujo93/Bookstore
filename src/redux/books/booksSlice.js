import { createSlice } from '@reduxjs/toolkit';

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
      };
      const newList = [...state.bookList];
      newList.push(newObject);
      state.bookList = newList;
    },
    remove: (state, action) => {
      const filterArray = state.bookList;
      filterArray.filter((books) => (
        books.id !== action.payload.id
      ));
      state.bookList = filterArray;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
