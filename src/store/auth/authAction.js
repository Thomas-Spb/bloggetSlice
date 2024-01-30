import axios from 'axios';
import { URL_API } from '../../api/const';
import { delToken } from '../tokenReducer';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCES = 'AUTH_REQUEST_SUCCES';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSuccess = data => ({
  type: AUTH_REQUEST_SUCCES,
  data,
});

export const authRequestError = error => ({
  type: AUTH_REQUEST_ERROR,
  error,
});

export const authLogout = error => ({
  type: AUTH_LOGOUT,
});

export const authRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  //   console.log(token);
  dispatch(authRequest());

  axios(`${URL_API}/api/v1/me`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data: { name, icon_img: iconImg } }) => {
      const img = iconImg.replace(/\?.*$/, '');
      const data = { name, img };
      dispatch(authRequestSuccess(data));
      //   const newHref = window.location.href.split('#')[0].replace('/auth', '');
      //   // console.log('newHref: ', newHref);
      //   window.history.replaceState(null, null, newHref);
      //   const homeHref = window.location.href.split('#')[0];
      //   window.history.replaceState(null, null, homeHref);
    })

    .catch(err => {
      console.error(err);
      dispatch(delToken());
      dispatch(authRequestError(err.toString()));
    });
};
