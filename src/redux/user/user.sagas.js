import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START
} from "./user.actions.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils";
import { signInSuccess, authFailure, signOutSuccess } from "./user.actions";

function* onGoogleSignInStart() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield signIn(user);
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

function* onEmailSignInStart({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield signIn(user);
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

function* onCheckUserSession() {
  try {
    const user = yield getCurrentUser();
    if (user) {
      yield signIn(user);
    }
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

function* onSignOutStart() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

function* googleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, onGoogleSignInStart);
}

function* emailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, onEmailSignInStart);
}

function* checkUserSession() {
  yield takeLatest(CHECK_USER_SESSION, onCheckUserSession);
}

function* signOutStart() {
  yield takeLatest(SIGN_OUT_START, onSignOutStart);
}

function* signIn(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      })
    );
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

export default function* userSagas() {
  yield all([
    call(googleSignInStart),
    call(emailSignInStart),
    call(checkUserSession),
    call(signOutStart)
  ]);
}