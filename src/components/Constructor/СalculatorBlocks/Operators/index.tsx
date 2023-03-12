import React from "react";
import { OperatorsData } from "../../../../data/data";
import styles from "./styles.module.css";
type OperatorsPropsType = {
  isActive?: boolean;
}
export const Operators: React.FC<OperatorsPropsType> = ({isActive = false}) => {
  return (
    <div className={isActive ? styles.containerOperatorsOpacity : styles.containerOperators}>
      <div className={styles.operators}>
        {OperatorsData.map((operator: any) => {
          return <button key={operator.id} className={styles.operator}>{operator.value}</button>;
        })}
      </div>
    </div>
  );
};
