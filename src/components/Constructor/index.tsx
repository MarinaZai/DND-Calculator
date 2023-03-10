import React, { useState } from "react";
import { AssemblyArea } from "./AssemblyArea";
import { СalculatorBlocks } from "./СalculatorBlocks";
import styles from "./styles.module.css";

export const Constructor: React.FC = () => {
  return (
    <div className={styles.containerConstructor}>
      <СalculatorBlocks />
      <AssemblyArea />
    </div>
  );
};
