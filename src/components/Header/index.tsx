import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { AiOutlineEye } from "react-icons/ai";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type HeaderPropsType = {
  dragItemDataDestination: Array<any>;
  setIsConstructorVisible: (isConstructorVisible: boolean) => void;
};

export const Header: React.FC<HeaderPropsType> = ({
  setIsConstructorVisible,
}) => {
  return (
    <div className={styles.header}>
      <input
        type="radio"
        name="radio"
        id="runtime"
        onClick={() => {
          setIsConstructorVisible(false);
        }}
      />
      <label htmlFor="runtime">
        <AiOutlineEye />
        Runtime
      </label>
      <input
        type="radio"
        name="radio"
        id="constructor"
        defaultChecked
        onClick={() => {
          setIsConstructorVisible(true);
        }}
      />
      <label htmlFor="constructor">
        <FaAngleLeft />
        <FaAngleRight />
        Constructor
      </label>
    </div>
  );
};
