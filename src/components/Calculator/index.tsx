import React from "react";
import { Constructor } from "../Constructor";
import { Header } from "../Header";
import styles from "./styles.module.css";

export const Calculator: React.FC = () => {
  return (
    <div className={styles.calculator}>
      <Header />
      <Constructor />
    </div>
  );
};
