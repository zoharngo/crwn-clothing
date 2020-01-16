import {
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_SUCCSES,
  FETCH_COLLECTION_FAILURE
} from "./shop.actions.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  erorrMessage: ""
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_COLLECTION_SUCCSES:
      const { collections } = action;
      return {
        ...state,
        isFetching: false,
        collections
      };

    case FETCH_COLLECTION_FAILURE:
      const { erorrMessage } = action;
      return {
        ...state,
        isFetching: false,
        erorrMessage
      };
    default:
      return state;
  }
};

export default shopReducer;
