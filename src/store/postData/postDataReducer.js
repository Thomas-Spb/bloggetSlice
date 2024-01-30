import {
  POST_DATA,
  POST_DATA_ERROR,
  POST_DATA_SUCCES,
} from './postDataActions';

const initinalState = {
  post: {},
  comments: [],
  error: '',
  status: '',
};

export const postDataReducer = (state = initinalState, action) => {
  switch (action.type) {
    case POST_DATA:
      return {
        ...state,
        status: 'loading',
        error: '',
      };

    case POST_DATA_SUCCES: {
      return {
        ...state,
        status: 'loaded',
        post: action.data[0],
        comments: action.data[1],
        error: '',
      };
    }

    case POST_DATA_ERROR:
      return {
        ...state,
        status: 'error',
        erorr: action.error,
      };

    default:
      return state;
  }
};
