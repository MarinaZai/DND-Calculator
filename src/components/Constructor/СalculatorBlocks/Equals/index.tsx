import React from "react";
import styles from "./styles.module.css";
type EqualsPropsType = {
  isActive?: boolean;
};
export const Equals: React.FC<EqualsPropsType> = ({ isActive = false }) => {
  return (
    <div
      className={
        isActive ? styles.containerEqualsOpacity : styles.containerEquals
      }
    >
      <button className={styles.equals}>=</button>
    </div>
  );
};
