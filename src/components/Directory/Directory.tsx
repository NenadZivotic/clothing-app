import React from "react";

import { useSelector } from "react-redux";

import styles from "./Directory.module.scss";

import MenuItem from "../MenuItem/MenuItem";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory: React.FC = () => {
  const directory = useSelector(selectDirectorySections);

  return (
    <div className={styles["directory-menu"]}>
      {directory.sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

export default Directory;
