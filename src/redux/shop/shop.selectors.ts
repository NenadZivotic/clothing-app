import { createSelector } from "reselect";

import { CollectionsFromFB } from "../../models/CollectionsFromFB.model";

const selectShop = (state: { shop: CollectionsFromFB; isFetching: boolean }) =>
  state;

export const selectCollections = createSelector(
  [selectShop],
  (state) => state.shop
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (state) => state.isFetching
);
