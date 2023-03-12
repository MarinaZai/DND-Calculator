import React from "react";
import { OperatorsData } from "../../../../data/data";
import styles from "./styles.module.css";
type OperatorsPropsType = {
  isActive?: boolean;
  isConstructorVisible?: boolean;
  dragItemDataDestination?: any;
};
export const Operators: React.FC<OperatorsPropsType> = ({
  isActive = false,
  isConstructorVisible,
  dragItemDataDestination,
}) => {
  return (
    <div
      className={
        isActive ? styles.containerOperatorsOpacity : styles.containerOperators
      }
    >
      <div className={styles.operators}>
        {OperatorsData.map((operator: any) => {
          return (
            <button
              key={operator.id}
              className={styles.operator}
              onClick={(e) =>
                !isConstructorVisible && dragItemDataDestination
                  ? console.log(e.currentTarget)
                  : console.log("ffff")
              }
            >
              {operator.value}
            </button>
          );
        })}
      </div>
    </div>
  );
};
