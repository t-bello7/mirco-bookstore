import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    check() {
      return 'Under construction';
    },
  },
});

export const { check } = categorySlice.actions;
export default categorySlice.reducer;
