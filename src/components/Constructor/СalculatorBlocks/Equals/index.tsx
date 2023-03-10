import React, { useState } from "react";
import styles from "./styles.module.css";

export const Equals: React.FC = () => {
  return (
    <div className={styles.containerEquals}>
      <button className={styles.equals}>=</button>
    </div>
  );
};
