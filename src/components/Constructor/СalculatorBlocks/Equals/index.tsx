import React from "react";
import styles from "./styles.module.css";
type EqualsPropsType = {
  isActive?: boolean;
  isConstructorVisible?: boolean;
  dragItemDataDestination?: Array<any>;
};
export const Equals: React.FC<EqualsPropsType> = ({
  isActive = false,
  isConstructorVisible,
  dragItemDataDestination,
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
          !isConstructorVisible && dragItemDataDestination
            ? console.log(e.currentTarget)
            : console.log("ffff")
        }
      >
        =
      </button>
    </div>
  );
};
