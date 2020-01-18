import {
  GOOGLE_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START
} from "./user.actions.types";


export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = currentUser => ({
  type: SIGN_IN_SUCCESS,
  payload: currentUser
});

export const signInFailure = errorMessage => ({
  type: SIGN_IN_FAILURE,
  payload: errorMessage
});

