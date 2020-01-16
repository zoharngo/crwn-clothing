import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
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

export const selectFetchingStatus = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);