import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  thomas: 'thomas',
};
export const postListSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {
    postListClear: (state, action) => {
      state.thomas = 'super';
    },
  },
});
