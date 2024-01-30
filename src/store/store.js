import { tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { tokenMiddleware } from './tokenReducer';

import { authReducer } from './auth/authReducer';
import { postsReducer } from './posts/postsReducer';

import { configureStore } from '@reduxjs/toolkit';
import postDataSlice from './postData/postDataSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    posts: postsReducer,
    postData: postDataSlice,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
