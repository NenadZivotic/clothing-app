import React from "react";

import { useSelector } from "react-redux";

import styles from "./CollectionsOverview.module.scss";

import { CollectionModel } from "../../models";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { CollectionsFromFB } from "../../models/CollectionsFromFB.model";

const CollectionsOverview: React.FC = () => {
  const collections: CollectionsFromFB | null = useSelector(selectCollections);

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
