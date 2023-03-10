import React, { useState } from "react";
import { OperatorsData, ValuesData } from "../../../../data/data";
import styles from "./styles.module.css";

export const BlockValues: React.FC = () => {
  return (
    <div className={styles.containerValues}>
      <div className={styles.values}>
        {ValuesData.map((value: any) => {
          return <button key={value.id} className={styles.value}>{value.value}</button>;
        })}
      </div>
      <div className={styles.zeroAndComma}>
        <button className={styles.zero}>0</button>
        <button className={styles.comma}>,</button>
      </div>
    </div>
  );
};
