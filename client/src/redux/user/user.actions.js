import {
  GOOGLE_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  AUTH_FAILURE,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_UP_START,
  SIGN_UP_SUCCESS
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

export const authFailure = errorMessage => ({
  type: AUTH_FAILURE,
  payload: errorMessage
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

export const signUpStart = userCredentials => ({
  type: SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccses = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});
