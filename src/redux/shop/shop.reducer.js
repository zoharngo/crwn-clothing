import { UPDATE_COLLECTIONS } from "./shop.actions.types";

const INITIAL_STATE = {
  collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      const { collections } = action;
      return {
        ...state,
        collections
      };
    default:
      return state;
  }
};

export default shopReducer;
