import React from "react";

import { useDispatch, useSelector } from "react-redux";

import styles from "./CartIcon.module.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon: React.FC = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  return (
    <div
      className={styles["cart-icon"]}
      onClick={() => dispatch(toggleCartHidden())}
    >
      <ShoppingIcon className={styles["shopping-icon"]} />
      <span className={styles["item-count"]}>{itemCount}</span>
    </div>
  );
};

export default CartIcon;
