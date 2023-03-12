import React from "react";
import { Constructor } from "../Constructor";
import { Header } from "../Header";
import styles from "./styles.module.css";
type СalculatorBlocksPropsType = {
  dragItemSource: Array<any>;
  dragItemDataDestination: Array<any>;
  isConstructorVisible: boolean;
  setIsConstructorVisible: (isConstructorVisible: boolean) => void;
  displayValue: number;
  setDisplayValue: React.Dispatch<React.SetStateAction<number>>;
  saveData: (operator:string) => void;
  doMath:()=>void
};
export const Calculator: React.FC<СalculatorBlocksPropsType> = ({
  dragItemSource,
  dragItemDataDestination,
  isConstructorVisible,
  setIsConstructorVisible,
  displayValue,
  setDisplayValue,
  saveData,
  doMath
}) => {
  return (
    <div className={styles.calculator}>
      <Header
        dragItemDataDestination={dragItemDataDestination}
        setIsConstructorVisible={setIsConstructorVisible}
      />
      <Constructor
        dragItemSource={dragItemSource}
        dragItemDataDestination={dragItemDataDestination}
        isConstructorVisible={isConstructorVisible}
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
        saveData={saveData}
        doMath={doMath}
      />
    </div>
  );
};
