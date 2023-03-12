import React from "react";
import { Constructor } from "../Constructor";
import { Header } from "../Header";
import styles from "./styles.module.css";
type СalculatorBlocksPropsType = {
  dragItemSource: Array<any>;
  dragItemDataDestination: Array<any>;
};
export const Calculator: React.FC<СalculatorBlocksPropsType> = ({dragItemSource, dragItemDataDestination}) => {
  return (
    <div className={styles.calculator}>
      <Header />
      <Constructor dragItemSource={dragItemSource} dragItemDataDestination={dragItemDataDestination} />
    </div>
  );
};
