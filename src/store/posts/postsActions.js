import axios from 'axios';
import { URL_API } from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCES = 'POSTS_REQUEST_SUCCES';
export const POSTS_REQUEST_SUCCES_AFTER = 'POSTS_REQUEST_SUCCES_AFTER';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const postRequest = () => ({
  type: POSTS_REQUEST,
});

export const postRequestSuccess = data => ({
  type: POSTS_REQUEST_SUCCES,
  data: data.children,
  after: data.after,
});

export const postRequestSuccessAfter = data => ({
  type: POSTS_REQUEST_SUCCES_AFTER,
  data: data.children,
  after: data.after,
});

export const postRequestError = error => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const changePage = page => ({
  type: CHANGE_PAGE,
  page,
});

export const postRequestAsync = newPage => (dispatch, getState) => {
  let page = getState().posts.page;
  if (newPage) {
    page = newPage;
    dispatch(changePage(page));
  }

  const token = getState().token.token;
  const after = getState().posts.after;
  const loading = getState().posts.loading;
  const isLast = getState().posts.isLast;

  if (!token || loading || isLast) return;

  dispatch(postRequest());

  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data }) => {
      //   if (!data) return;
      //   console.log(after);

      if (after) {
        console.log('after', data.data);
        dispatch(postRequestSuccessAfter(data.data));
      } else {
        console.log('no-after', data.data);
        dispatch(postRequestSuccess(data.data));
      }
    })
    .catch(err => {
      console.error(err);
      dispatch(postRequestError(err.toString()));
    });
};
