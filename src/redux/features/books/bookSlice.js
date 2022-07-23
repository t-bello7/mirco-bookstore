import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  client, booksBaseUrl, appId,
} from '../../../api/client';

const initialState = {
  value: {},
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await client.get(`${booksBaseUrl}/apps/${appId}/books`);
  return JSON.parse(response);
});

export const addNewBook = createAsyncThunk('books/addNewBook', async (initialPost) => {
  await client.post(`${booksBaseUrl}/apps/${appId}/books`, initialPost);
  return initialPost;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  await client.delete(`${booksBaseUrl}/apps/${appId}/books/${id}`, { method: 'DELETE' });
  return id;
});

const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    add(state, action) {
      state.value[action.payload.item_id] = [{
        title: action.payload.title,
        category: action.payload.category,
        author: action.payload.author,
      }];
    },
    remove(state, action) {
      const index = action.payload;
      delete state.value[index];
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.value[action.payload.item_id] = [{
          title: action.payload.title,
          category: action.payload.category,
          author: action.payload.author,
        }];
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const index = action.payload;
        delete state.value[index];
      });
  },
});

export const { add, remove } = BookSlice.actions;

export const selectAllBookIds = (state) => state.books.value.map((book) => Object.keys(book)[0]);

export const selectBooksById = (state, bookId) => state.books.value[bookId];

export default BookSlice.reducer;
