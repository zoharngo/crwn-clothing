import { createSelector } from "reselect";

const selectDircetory = state => state.shop;

export const selectShopCollections = createSelector(
  [selectDircetory],
  shop => shop.collections
);

export const selectCollection = collectionURLParam =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionURLParam]
  );

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  collections =>
    Object.keys(collections)
      .map(key => collections[key])
);
