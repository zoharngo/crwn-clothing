import { createSelector } from "reselect";

const selectDircetory = state => state.shop;

export const selectShopCollections = createSelector(
  [selectDircetory],
  shop => shop.collections
);

export const selectCollection = collectionURLParam =>
  createSelector([selectShopCollections], collections =>
    collections ? collections[collectionURLParam] : null
  );

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectLoadingStatus = createSelector(
  [selectDircetory],
  shop => shop.loading
);
