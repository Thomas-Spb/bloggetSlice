import { createSlice } from '@reduxjs/toolkit';
import { postDataAsync } from './postDataActions';

const initialState = {
  post: {},
  comments: [],
  error: '',
  status: '',
  thomas: 'thomas',
};

export const postDataSlice = createSlice({
  name: 'postData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(postDataAsync.pending, state => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(postDataAsync.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.post = action.payload.post;
        state.comments = action.payload.comments;
        state.error = '';
      })
      .addCase(postDataAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error;
      });
  },
});

console.log(postDataSlice);

export default postDataSlice.reducer;
