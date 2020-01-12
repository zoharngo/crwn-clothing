import {
  UPDATE_COLLECTIONS,
  UPDATE_LOADING_STATUS
} from "./shop.actions.types";

const INITIAL_STATE = {
  collections: null,
  loading: true
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      const { collections } = action;
      return {
        ...state,
        collections
      };
    case UPDATE_LOADING_STATUS:
      return {
        ...state,
        loading: !state.loading
      };
    default:
      return state;
  }
};

export default shopReducer;
