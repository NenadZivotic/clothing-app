import { CollectionModel } from "./CollectionModel.model";

export interface CollectionsFromFB {
  collections: {
    hats: CollectionModel;
    sneakers: CollectionModel;
    jackets: CollectionModel;
    mens: CollectionModel;
    womens: CollectionModel;
  };
}
