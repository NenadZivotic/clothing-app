import React from "react";

import { useDispatch } from "react-redux";

import styles from "./CollectionItem.module.scss";

import { CollectionItemModel } from "../../models";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../CustomButton/CustomButton";

interface IProps {
  item: CollectionItemModel;
}

const CollectionItem: React.FC<IProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;

  return (
    <div className={styles["collection-item"]}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles["collection-footer"]}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
