import React from "react";

import styles from "./FormInput.module.scss";

interface IProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  type: string;
  value: string;
  required: boolean;
}

const FormInput: React.FC<IProps> = ({
  handleChange,
  label,
  ...otherProps
}) => {
  return (
    <div className={styles.group}>
      <input
        className={styles["form-input"]}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${otherProps.value.length ? styles["shrink"] : ""} ${
            styles["form-input-label"]
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
