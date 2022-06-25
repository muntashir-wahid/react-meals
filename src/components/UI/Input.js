import React from "react";
import styles from "./Input.module.css";

const Input = function (props) {
  return (
    <div className={styles.input}>
      <laber htmlFor={props.input.id}>{props.label}</laber>
      <input {...props.input} />
    </div>
  );
};

export default Input;
