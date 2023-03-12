import React from "react";
import { EmptyArea } from "./EmptyArea";
import styles from "./styles.module.css";
import { Draggable } from "react-beautiful-dnd";
import { Display } from "../СalculatorBlocks/Display";
import { Operators } from "../СalculatorBlocks/Operators";
import { BlockValues } from "../СalculatorBlocks/BlockValues";
import { Equals } from "../СalculatorBlocks/Equals";

type AssemblyAreaPropsType = {
  dragItemDataDestination: Array<any>;
  isConstructorVisible: boolean;
  displayValue: number;
  setDisplayValue: React.Dispatch<React.SetStateAction<number>>;
  saveData: (operator: string) => void;
  doMath:()=>void
};

export const AssemblyArea: React.FC<AssemblyAreaPropsType> = ({
  dragItemDataDestination,
  isConstructorVisible,
  displayValue,
  setDisplayValue,
  saveData,
  doMath
}) => {
  const isDisable = (sourceName: string) => {
    const result = dragItemDataDestination.find(
      (distElem) => distElem.name === sourceName
    );
    return !!result;
  };
  const getCalculatorPart = (item: any, isConstructorVi: boolean) => {
    switch (item.name) {
      case "display":
        return (
          <Display
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            isConstructorVisible={isConstructorVisible}
          />
        );
      case "operators":
        return (
          <Operators
            saveData={saveData}
            isConstructorVisible={isConstructorVisible}
            dragItemDataDestination={dragItemDataDestination}
          />
        );
      case "blockValues":
        return (
          <BlockValues
            isConstructorVisible={isConstructorVisible}
            dragItemDataDestination={dragItemDataDestination}
            setDisplayValue={setDisplayValue}
          />
        );
      case "equals":
        return (
          <Equals
            isConstructorVisible={isConstructorVisible}
            dragItemDataDestination={dragItemDataDestination}
            doMath={doMath}
          />
        );
      default:
        return <div></div>;
    }
  };
  return (
    <div className={styles.containerAssembly}>
      {dragItemDataDestination.length === 0 ? (
        <EmptyArea />
      ) : (
        dragItemDataDestination.map((item, index) => {
          const isDisabled = isDisable(item.name);
          return (
            <Draggable
              draggableId={item.id.toString()}
              index={index}
              key={item.id}
              isDragDisabled={isDisabled}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {getCalculatorPart(item, false)}
                </div>
              )}
            </Draggable>
          );
        })
      )}
    </div>
  );
};
