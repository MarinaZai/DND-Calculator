import React, { useState } from "react";
import styles from "./styles.module.css";

export const Display: React.FC = () => {
  return (
    <div className={styles.containerDisplay}>
      <div className={styles.display}><span>0</span></div>
    </div>
  );
};
