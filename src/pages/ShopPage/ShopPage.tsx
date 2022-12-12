import React, { useEffect } from "react";

import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./ShopPage.module.scss";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

const ShopPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync() as any);
  }, [dispatch]);

  return (
    <div className={styles["shop-page"]}>
      <Outlet />
    </div>
  );
};

export default ShopPage;
