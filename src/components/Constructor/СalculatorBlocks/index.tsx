import React, { useState } from "react";
import { BlockValues } from "./BlockValues";
import { Display } from "./Display";
import { Equals } from "./Equals";
import { Operators } from "./Operators";
import styles from "./styles.module.css";

export const СalculatorBlocks: React.FC = () => {
  return (
    <div className={styles.containerBlocks}>
      <Display />
      <Operators />
      <BlockValues />
      <Equals />
    </div>
  );
};
