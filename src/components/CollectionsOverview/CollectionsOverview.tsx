import React from "react";

import { useSelector } from "react-redux";

import styles from "./CollectionsOverview.module.scss";

import { CollectionModel, CollectionsModel } from "../../models";
import CollectionPreview from "../CollectionPreview/CollectionPreview";

const CollectionsOverview: React.FC = () => {
  const collections: CollectionsModel | null = useSelector(
    (state: { shop: { collections: CollectionsModel } }) => {
      return state.shop.collections;
    }
  );

  const overviewCollections: CollectionModel[] = collections
    ? Object.keys(collections).map((key) => (collections as any)[key])
    : [];

  return (
    <div className={styles["collections-overview"]}>
      {overviewCollections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
