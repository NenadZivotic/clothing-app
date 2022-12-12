import React from "react";

import { useDispatch } from "react-redux";

import styles from "./CheckoutItem.module.scss";

import { CollectionItemModel } from "../../models";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.actions";

interface IProps {
  cartItem: CollectionItemModel;
}

const CheckoutItem: React.FC<IProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className={styles["checkout-item"]}>
      <div className={styles["image-container"]}>
        <img src={imageUrl} alt="test" />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div
          className={styles.arrow}
          onClick={() => dispatch(removeItem(cartItem))}
        >
          &#10094;
        </div>
        <span className={styles.value}> {quantity}</span>
        <div
          className={styles.arrow}
          onClick={() => dispatch(addItem(cartItem))}
        >
          &#10095;
        </div>
      </span>
      <span className={styles.price}>{price}</span>
      <div
        className={styles["remove-button"]}
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
