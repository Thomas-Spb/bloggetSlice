import { tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { tokenMiddleware } from './tokenReducer';

import { authReducer } from './auth/authReducer';

import { configureStore } from '@reduxjs/toolkit';
import postDataSlice from './postData/postDataSlice';
import postsSlice from './posts/postsSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    posts: postsSlice,
    postData: postDataSlice,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
