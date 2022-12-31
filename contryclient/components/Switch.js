import React from "react";
import styles  from "../styles/Switch.module.css"
import { changeTheme } from "../redux/themeSlice";
import { useDispatch } from "react-redux";


const Switch = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(changeTheme());
      };
  return (
    <label  className={styles.switch}>
      <input onClick={handleClick} type="checkbox" />
      <span  className={styles.slider}></span>
    </label>
  );
};

export default Switch;
