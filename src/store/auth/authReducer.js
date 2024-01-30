import {
  AUTH_LOGOUT,
  AUTH_REQUEST,
  AUTH_REQUEST_ERROR,
  AUTH_REQUEST_SUCCES,
} from './authAction';

const initinalState = {
  loading: false,
  data: {},
  error: '',
};

export const authReducer = (state = initinalState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case AUTH_REQUEST_SUCCES:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };

    case AUTH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        erorr: action.error,
      };

    case AUTH_LOGOUT:
      return {
        ...state,
        data: {},
      };
    default:
      return state;
  }
};
