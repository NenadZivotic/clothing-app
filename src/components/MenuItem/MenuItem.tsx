import React from "react";

import { useNavigate } from "react-router-dom";

import styles from "./Menuitem.module.scss";

import { SectionModel } from "../../models/SectionModel.model";

interface IProps extends SectionModel {}

const MenuItem: React.FC<IProps> = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(linkUrl)}
      className={styles["menu-item"]}
      style={{
        height: size && size === "large" ? "380px" : "240px",
      }}
    >
      <div
        className={styles["background-image"]}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
