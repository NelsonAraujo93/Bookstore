import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesList: [],
  status: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    add: (state, newCat) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const list = state.categoriesList;
      list.push(newCat);
    },
    checkStatus: (state) => {
      const nState = state;
      nState.status = 'Under construction';
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
