import React from "react";
import { Header } from "../Header";
import styles from "./styles.module.css";

export const Calculator: React.FC = () => {
  return (
    <div className={styles.calculator}>
      <Header />
    </div>
  );
};
