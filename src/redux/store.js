import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './features/categories/categorySlice';
import bookReducer from './features/books/bookSlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});
