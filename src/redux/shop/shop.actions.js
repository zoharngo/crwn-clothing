import {
  UPDATE_COLLECTIONS,
  UPDATE_LOADING_STATUS
} from "./shop.actions.types";

export const updateCollections = collections => ({
  type: UPDATE_COLLECTIONS,
  collections
});

export const updateLoadingStatus = () => ({
  type: UPDATE_LOADING_STATUS
});
