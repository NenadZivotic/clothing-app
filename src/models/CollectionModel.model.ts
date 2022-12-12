import { CollectionItemModel } from "./CollectionItemModel.model";

export interface CollectionModel {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItemModel[];
}
