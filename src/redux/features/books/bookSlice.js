import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  value: [],
};

const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    add(state, action) {
      state.value.push({
        id: uuidv4(),
        genre: action.payload.genre,
        title: action.payload.title,
        producer: action.payload.producer,
      });
    },
    remove(state, action) {
      const index = state.value.findIndex((item) => item.id === action.payload);
      state.value.splice(index, 1);
      return state;
    },
  },
});

export const { add, remove } = BookSlice.actions;
export default BookSlice.reducer;
