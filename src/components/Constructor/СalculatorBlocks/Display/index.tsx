import React from "react";
import styles from "./styles.module.css";

type DisplayPropsType = {
  isActive?: boolean;
  displayValue: number
  isConstructorVisible?: boolean;
}

export const Display: React.FC<DisplayPropsType> = ({isActive = false, displayValue = 0,isConstructorVisible}) => {
  return (
    <div className={isActive ? styles.containerDisplayOpacity : styles.containerDisplay}>
      <div className={styles.display}><span>{!isConstructorVisible ? displayValue : displayValue = 0}</span></div>
    </div>
  );
};
