import { setToken } from '../api/token';

const initinalState = {
  token: '',
};

const UPDATE_TOKEN = 'UPDATE-TOKEN';
const DELETE_TOKEN = 'DELETE-TOKEN';

export const updateToken = token => ({
  type: UPDATE_TOKEN,
  token,
});

export const delToken = () => ({
  type: DELETE_TOKEN,
  token: '',
});

export const tokenMiddleware = store => next => action => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
  }
  if (action.type === DELETE_TOKEN) {
    setToken('');
  }

  next(action);
};

export const tokenReducer = (state = initinalState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKEN:
      setToken('');
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
};
