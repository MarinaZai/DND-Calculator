import React from "react";
import styles from "./styles.module.css";
type EqualsPropsType = {
  isActive?: boolean;
  isConstructorVisible?: boolean;
  dragItemDataDestination?: Array<any>;
  doMath?:()=>void
};
export const Equals: React.FC<EqualsPropsType> = ({
  isActive = false,
  isConstructorVisible,
  dragItemDataDestination,
  doMath
}) => {
  return (
    <div
      className={
        isActive ? styles.containerEqualsOpacity : styles.containerEquals
      }
    >
      <button
        className={styles.equals}
        onClick={(e) =>
          !isConstructorVisible && dragItemDataDestination && doMath
            ? doMath()
            : console.log("ffff")
        }
      >
        =
      </button>
    </div>
  );
};
