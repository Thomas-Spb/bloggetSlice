import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { tokenMiddleware } from './tokenReducer';
import { thunk } from 'redux-thunk';
import { authReducer } from './auth/authReducer';
import { postsReducer } from './posts/postsReducer';
import { postDataReducer } from './postData/postDataReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  posts: postsReducer,
  postData: postDataReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
