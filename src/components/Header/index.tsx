import React from "react";
import styles from "./styles.module.css";
import { AiOutlineEye } from "react-icons/ai";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type HeaderPropsType = {
  dragItemDataDestination: Array<any>;
  isConstructorVisible: boolean;
  setIsConstructorVisible: (isConstructorVisible: boolean) => void;
};

export const Header: React.FC<HeaderPropsType> = ({
  isConstructorVisible,
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
        {isConstructorVisible ? (
          <AiOutlineEye />
        ) : (
          <AiOutlineEye color="#5D5FEF" />
        )}
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
        <div>
          {isConstructorVisible ? (
            <FaAngleLeft color="#5D5FEF" />
          ) : (
            <FaAngleLeft />
          )}
          {isConstructorVisible ? (
            <FaAngleRight color="#5D5FEF" />
          ) : (
            <FaAngleRight />
          )}
        </div>
        Constructor
      </label>
    </div>
  );
};
