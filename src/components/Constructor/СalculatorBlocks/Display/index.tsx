import React from "react";
import styles from "./styles.module.css";

type DisplayPropsType = {
  isActive?: boolean;
}

export const Display: React.FC<DisplayPropsType> = ({isActive = false}) => {
  return (
    <div className={isActive ? styles.containerDisplayOpacity : styles.containerDisplay}>
      <div className={styles.display}><span>0</span></div>
    </div>
  );
};
