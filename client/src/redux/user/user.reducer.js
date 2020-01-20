import {
  SIGN_IN_SUCCESS,
  AUTH_FAILURE,
  SIGN_OUT_SUCCESS,
} from "./user.actions.types";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: ""
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: ""
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: ""
      };
    case AUTH_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
