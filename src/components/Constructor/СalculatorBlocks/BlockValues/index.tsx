import React from "react";
import { ValuesData } from "../../../../data/data";
import styles from "./styles.module.css";
type BlockValuesPropsType = {
  isActive?: boolean;
}
export const BlockValues: React.FC<BlockValuesPropsType> = ({isActive = false}) => {
  return (
    <div className={isActive ?styles.containerValuesOpacity :styles.containerValues}>
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
