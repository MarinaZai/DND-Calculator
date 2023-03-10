import React, { useState } from "react";
import { OperatorsData } from "../../../../data/data";
import styles from "./styles.module.css";

export const Operators: React.FC = () => {
  return (
    <div className={styles.containerOperators}>
      <div className={styles.operators}>
        {OperatorsData.map((operator: any) => {
          return <button className={styles.operator}>{operator.value}</button>;
        })}
      </div>
    </div>
  );
};
