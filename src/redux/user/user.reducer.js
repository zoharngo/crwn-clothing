import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from "./user.actions.types";

const INITIAL_STATE = {
  currentUser: null,
  error: ""
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: ""
      };

    case SIGN_IN_FAILURE:
      const { errorMessage } = action;
      return {
        ...state,
        payload: errorMessage
      };
    default:
      return state;
  }
};

export default userReducer;
