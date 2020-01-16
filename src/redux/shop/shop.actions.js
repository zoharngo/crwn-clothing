import {
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_SUCCSES,
  FETCH_COLLECTION_FAILURE
} from "./shop.actions.types";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: FETCH_COLLECTION_START
});

export const fetchCollectionSuccses = payload => ({
  type: FETCH_COLLECTION_SUCCSES,
  collections: payload
});

export const fetchCollectionFailure = errorMessage => ({
  type: FETCH_COLLECTION_FAILURE,
  errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccses(collectionMap));
      })
      .catch(error => dispatch(fetchCollectionFailure(error.message)));
  };
};
