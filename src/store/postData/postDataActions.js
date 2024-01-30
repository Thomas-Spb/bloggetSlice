import axios from 'axios';
import { URL_API } from '../../api/const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postDataAsync = createAsyncThunk(
  'postData/fetch',
  (id, { getState }) => {
    const token = getState().token.token;
    if (!token) return;

    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(
        ({
          data: [
            {
              data: {
                children: [{ data: post }],
              },
            },
            {
              data: { children },
            },
          ],
        }) => {
          const comments = children.map(item => item.data);
          console.log(post, comments);
          return { post, comments };
        },
      )

      .catch(error => {
        console.error(error);
        return { error: error.toString() };
      });
  },
);
