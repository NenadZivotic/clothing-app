import React from "react";

import styles from "./CollectionPreview.module.scss";

import { CollectionItemModel } from "../../models";
import CollectionItem from "../CollectionItem/CollectionItem";

interface IProps {
  title: string;
  items: CollectionItemModel[];
}

const CollectionPreview: React.FC<IProps> = ({ title, items }) => {
  return (
    <div className={styles["collection-preview"]}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
      <div className={styles.preview}>
        {items
          .filter((_item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
