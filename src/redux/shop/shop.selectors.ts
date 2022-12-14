import { createSelector } from "reselect";

import { CollectionsFromFB } from "../../models/CollectionsFromFB.model";

const selectShop = (state: {
  shop: { collections: CollectionsFromFB };
  isFetching: boolean;
}) => state;

export const selectCollections = createSelector(
  [selectShop],
  (state) => state.shop.collections
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (state) => state.isFetching
);
