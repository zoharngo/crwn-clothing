import { all, call, takeLatest, put } from "redux-saga/effects";
import { clearCart } from "./cart.actions";
import { SIGN_OUT_SUCCESS } from "../user/user.actions.types";

function* onClearCart() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, onClearCart);
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
