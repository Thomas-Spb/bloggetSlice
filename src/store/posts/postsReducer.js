import {
  CHANGE_PAGE,
  POSTS_REQUEST,
  POSTS_REQUEST_ERROR,
  POSTS_REQUEST_SUCCES,
  POSTS_REQUEST_SUCCES_AFTER,
} from './postsActions';

const initinalState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsReducer = (state = initinalState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case POSTS_REQUEST_SUCCES: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
        after: action.after,
        isLast: !action.after,
        page: '',
      };
    }

    case POSTS_REQUEST_SUCCES_AFTER: {
      console.log(...state);
      return {
        ...state,
        loading: false,
        // data: [Object.keys(...state.posts), ...action.data],
        data: [...state.data, ...action.data],
        error: '',
        after: action.after,
        isLast: !action.after,
      };
    }

    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        erorr: action.error,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        posts: [],
        page: action.page,
        after: '',
        isLast: false,
      };

    default:
      return state;
  }
};
