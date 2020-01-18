import { takeLatest, call, put } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { fetchCollectionSuccses, fetchCollectionFailure } from "./shop.actions";
import { FETCH_COLLECTION_START } from "./shop.actions.types";

function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccses(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export default function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTION_START, fetchCollectionAsync);
}
