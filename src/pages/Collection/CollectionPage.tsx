import React from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./CollectionPage.module.scss";

import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { CollectionModel } from "../../models";
import Spinner from "../../components/Spinner/Spinner";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { CollectionsFromFB } from "../../models/CollectionsFromFB.model";

const CollectionPage: React.FC = () => {
  const { collectionId } = useParams();

  const collection: CollectionsFromFB = useSelector(selectCollections);

  const collectionForShow: () => CollectionModel = () => {
    if (collection) {
      if (collectionId) {
        const foundCollection = (collection as any)[collectionId];
        if (foundCollection) {
          return foundCollection;
        }
      }
    }
  };

  return !collection ? (
    <Spinner />
  ) : (
    <div className={styles["collection-page"]}>
      <h2 className={styles.title}>{collectionForShow().title}</h2>
      <div className={styles.items}>
        {collectionForShow().items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
