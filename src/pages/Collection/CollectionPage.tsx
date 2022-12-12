import React from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./CollectionPage.module.scss";

import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { CollectionModel } from "../../models";
import Spinner from "../../components/Spinner/Spinner";

const CollectionPage: React.FC = () => {
  const { collectionId } = useParams();

  const collection: CollectionModel = useSelector(
    (state: { shop: { collections: any } }) => {
      if (state.shop.collections) {
        if (collectionId) {
          const foundCollection = state.shop.collections[collectionId];
          if (foundCollection) {
            return foundCollection;
          }
        }
      }
    }
  );

  return !collection ? (
    <Spinner />
  ) : (
    <div className={styles["collection-page"]}>
      <h2 className={styles.title}>{collection.title}</h2>
      <div className={styles.items}>
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
