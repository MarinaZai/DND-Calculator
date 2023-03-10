import React, { useState } from "react";
import { EmptyArea } from "./EmptyArea";
import styles from "./styles.module.css";

export const AssemblyArea: React.FC = () => {
  return (
    <div className={styles.containerAssembly}>
      <EmptyArea /> {/* if else */}
    </div>
  );
};
