import React from "react";

import { useSelector } from "react-redux";

import styles from "./CheckoutPage.module.scss";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeButton from "../../components/StripeButton/StripeButton";

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const totalValue = useSelector(selectCartTotal);

  return (
    <div className={styles["checkout-page"]}>
      <div className={styles["checkout-header"]}>
        <div className={styles["header-block"]}>
          <span>Product</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Description</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Quantity</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Price</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className={styles.total}>
        <span>TOTAL: ${totalValue}</span>
      </div>
      <div className={styles["test-warning"]}>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </div>
      <StripeButton price={totalValue} />
    </div>
  );
};

export default CheckoutPage;
