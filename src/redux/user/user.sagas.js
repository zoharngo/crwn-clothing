import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START
} from "./user.actions.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/firebase.utils";
import { signInSuccess, signInFailure } from "./user.actions";

function* onGoogleSignInStart() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield signIn(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* onEmailSignInStart({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield signIn(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
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
    yield put(signInFailure(error.message));
  }
}

function* googleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, onGoogleSignInStart);
}

function* emailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, onEmailSignInStart);
}

export default function* userSagas() {
  yield all([call(googleSignInStart), call(emailSignInStart)]);
}
