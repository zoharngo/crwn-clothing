import { UPDATE_COLLECTIONS } from "./shop.actions.types";

export const updateCollections = collections => ({
  type: UPDATE_COLLECTIONS,
  collections
});
