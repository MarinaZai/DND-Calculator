import React from "react";
import styles from "./styles.module.css";

type DisplayPropsType = {
  isActive?: boolean;
  displayValue: number;
  isConstructorVisible?: boolean;
  setDisplayValue?: React.Dispatch<React.SetStateAction<number>> | undefined;
};

export const Display: React.FC<DisplayPropsType> = ({
  isActive = false,
  displayValue = 0,
  isConstructorVisible,
  setDisplayValue,
}) => {
  if (isConstructorVisible && setDisplayValue) {
    setDisplayValue(0);
  }
  return (
    <div
      className={
        isActive ? styles.containerDisplayOpacity : styles.containerDisplay
      }
    >
      <div className={styles.display}>
        <span>{displayValue}</span>
      </div>
    </div>
  );
};
