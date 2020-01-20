import {
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_SUCCSES,
  FETCH_COLLECTION_FAILURE
} from "./shop.actions.types";


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
