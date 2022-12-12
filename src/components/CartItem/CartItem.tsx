import React from "react";

import styles from "./CartItem.module.scss";

import { CollectionItemModel } from "../../models";

interface IProps {
  item: CollectionItemModel;
}

const CartItem: React.FC<IProps> = ({
  item: { imageUrl, price, name, quantity },
}) => {
  return (
    <div className={styles["cart-item"]}>
      <img src={imageUrl} alt={name} />
      <div className={styles["item-details"]}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
