const initinalState = {
  comment: 'Redux Hi',
};

const UPDATE_COMMENT = 'UPDATE-COMMENT';

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});

export const commentReducer = (state = initinalState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
    default:
      return state;
  }
};
