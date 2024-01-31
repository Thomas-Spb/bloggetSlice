import axios from 'axios';
import { URL_API } from '../../api/const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, { getState }) => {
    console.log('getState: ', getState());
    const page = newPage || getState().posts.page;
    const token = getState().token.token;
    const after = getState().posts.after;
    // const loading = getState().posts.loading;
    // const isLast = getState().posts.isLast;

    // if (!token || loading || isLast) return;
    if (!token) return;

    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    )
      .then(({ data }) => data.data)
      .catch(error => ({ error: error.toString() }));
  },
);
