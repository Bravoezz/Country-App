import React from "react";
import styles  from "../styles/Switch.module.css"

const Switch = () => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;
