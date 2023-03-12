import React from "react";
import { OperatorsData } from "../../../../data/data";
import styles from "./styles.module.css";
type OperatorsPropsType = {
  isActive?: boolean;
  isConstructorVisible?: boolean;
  dragItemDataDestination?: any;
  saveData?: (operator: string) => void;
};
export const Operators: React.FC<OperatorsPropsType> = ({
  isActive = false,
  isConstructorVisible,
  dragItemDataDestination,
  saveData,
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
            <div
              key={operator.id}
              className={isConstructorVisible ? styles.operator : styles.operatorPointer}
              onClick={(e) =>
                !isConstructorVisible && dragItemDataDestination && saveData
                  ? saveData(operator.operator)
                  : ''
              }
            >
              {operator.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
