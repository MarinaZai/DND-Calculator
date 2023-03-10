import React from "react";
import { Constructor } from "../Constructor";
import { Header } from "../Header";
import styles from "./styles.module.css";
type –°alculatorBlocksPropsType = {
  dragItemSource: Array<any>;
  dragItemDataDestination: Array<any>;
  isConstructorVisible: boolean;
  setIsConstructorVisible: (isConstructorVisible: boolean) => void;
  displayValue: number;
  setDisplayValue: React.Dispatch<React.SetStateAction<number>>;
  saveData: (operator: string) => void;
  doMath: () => void;
  removeAddedItem: (index:any)=>void
  updateDisplayValue:(value: number)=>void
};
export const Calculator: React.FC<–°alculatorBlocksPropsType> = ({
  dragItemSource,
  dragItemDataDestination,
  isConstructorVisible,
  setIsConstructorVisible,
  displayValue,
  setDisplayValue,
  saveData,
  doMath,
  removeAddedItem,
  updateDisplayValue
}) => {
  return (
    <div className={styles.calculator}>
      <Header
        isConstructorVisible={isConstructorVisible}
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
        removeAddedItem={removeAddedItem}
        updateDisplayValue={updateDisplayValue}
      />
    </div>
  );
};
