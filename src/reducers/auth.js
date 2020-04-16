import { SIGN_IN, SIGN_UP, SIGN_IN_FAILED, SIGN_UP_FAILED, SIGN_OUT } from '../actions/types';

const initialState = {
  user: null,
  userSession: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        userSession: action.payload.userSession,
      };

      case SIGN_UP:
      return {
        ...state,
        user: action.payload.user,
        userSession: action.payload.userSession,
      };
    default: {
      return state;
    }
  }
};
