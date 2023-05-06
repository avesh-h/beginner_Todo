import React, { useRef } from "react";
import styles from "./input.module.css";

const CustomInput = ({ label, type, ...props }) => {
  const inputField = useRef();
  return (
    <div className={styles.mainInput}>
      <label className={styles.labelText}>
        {label}
        {"  "}
        <input type={type} {...props} autoFocus className={styles.input} />
      </label>
    </div>
  );
};

export default CustomInput;
