import React, { useState } from "react";
import { AssemblyArea } from "./AssemblyArea";
import { СalculatorBlocks } from "./СalculatorBlocks";
import styles from "./styles.module.css";
import { BlockValues } from "./СalculatorBlocks/BlockValues";

export const Constructor: React.FC = () => {
  return (
    <div className={styles.containerConstructor}>
      <СalculatorBlocks />
      <AssemblyArea />
    </div>
  );
};
