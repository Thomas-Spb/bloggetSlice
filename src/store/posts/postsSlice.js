import { createSlice } from '@reduxjs/toolkit';
import { postsRequestAsync } from './postsActions';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  thomasTest: 'thomastest',
};

export const postsSlice = createSlice({
  name: 'posts11',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
      state.posts = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postsRequestAsync.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(postsRequestAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = [...state.posts, ...action.payload.children];
        state.error = '';
        state.after = action.payload.after;
        state.isLast = !action.payload.after;
      })
      .addCase(postsRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payloaderror;
      });
  },
});

export default postsSlice.reducer;
