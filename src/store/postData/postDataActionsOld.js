import axios from 'axios';
import { URL_API } from '../../api/const';

export const POST_DATA = 'POST_DATA';
export const POST_DATA_SUCCES = 'POST_DATA_SUCCES';
export const POST_DATA_ERROR = 'POST_DATA_ERROR';

export const postData = () => ({
  type: POST_DATA,
});

export const postDataSuccess = data => ({
  type: POST_DATA_SUCCES,
  data,
});

export const postDataError = error => ({
  type: POST_DATA_ERROR,
  error,
});

export const postDataAsync = id => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  dispatch(postData());

  axios(`${URL_API}/comments/${id}`, {
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
        dispatch(postDataSuccess([post, comments]));
      },
    )
    // .then(data => {
    //   if (!data) return;
    //   // const postData = data.data[1].data.children;
    //   const postData = data
    //   dispatch(postDataSuccess(postData));
    // })
    .catch(err => {
      console.error(err);
      dispatch(postDataError(err.toString()));
    });
};
