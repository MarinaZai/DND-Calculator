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
      <div
        className={isConstructorVisible ? styles.equals : styles.equalsPointer}
        onClick={(e) =>
          !isConstructorVisible && dragItemDataDestination && doMath
            ? doMath()
            : ''
        }
      >
        =
      </div>
    </div>
  );
};
