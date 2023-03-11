import React from "react";
import styles from "./styles.module.css";
import { AiOutlineEye } from "react-icons/ai";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <input type="radio" name="radio" id="runtime" />
      <label htmlFor="runtime">
        <AiOutlineEye />
        Runtime
      </label>
      <input type="radio" name="radio" id="constructor" defaultChecked />
      <label htmlFor="constructor">
        <FaAngleLeft />
        <FaAngleRight />
        Constructor
      </label>
    </div>
  );
};
