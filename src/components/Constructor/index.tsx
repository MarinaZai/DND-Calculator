import React from "react";
import { AssemblyArea } from "./AssemblyArea";
import { СalculatorBlocks } from "./СalculatorBlocks";
import styles from "./styles.module.css";
import { Droppable } from "react-beautiful-dnd";
type СalculatorBlocksPropsType = {
  dragItemSource: Array<any>;
  dragItemDataDestination: Array<any>;
  isConstructorVisible: boolean;
  displayValue: number;
  setDisplayValue: React.Dispatch<React.SetStateAction<number>>;
  saveData: (operator: string) => void;
  doMath:()=>void
  removeAddedItem: (index:any)=>void
};
export const Constructor: React.FC<СalculatorBlocksPropsType> = ({
  dragItemSource,
  dragItemDataDestination,
  isConstructorVisible,
  displayValue,
  setDisplayValue,
  saveData,
  doMath,
  removeAddedItem
}) => {
  return (
    <div className={styles.containerConstructor}>
      {isConstructorVisible && (
        <Droppable droppableId="droppable-1" isDropDisabled={true}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <СalculatorBlocks
                dragItemSource={dragItemSource}
                isConstructorVisible={isConstructorVisible}
                dragItemDataDestination={dragItemDataDestination}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
      <Droppable droppableId="droppable-2">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <AssemblyArea
              dragItemDataDestination={dragItemDataDestination}
              isConstructorVisible={isConstructorVisible}
              displayValue={displayValue}
              setDisplayValue={setDisplayValue}
              saveData={saveData}
              doMath={doMath}
              removeAddedItem={removeAddedItem}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
