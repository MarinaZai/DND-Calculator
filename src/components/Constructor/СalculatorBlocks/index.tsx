import React, { Fragment} from "react";
import { DragItemData } from "../../../data/data";
import styles from "./styles.module.css";

export const СalculatorBlocks: React.FC = () => {
  return (
    <div className={styles.containerBlocks}>
      {DragItemData.map((item) => {
        return <Fragment key={item.id}>{item.component}</Fragment>;
      })}
    </div>
  );
};
