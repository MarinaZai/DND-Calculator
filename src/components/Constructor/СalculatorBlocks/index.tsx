import React from "react";
import styles from "./styles.module.css";
import {
  Draggable,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";
import { Display } from "./Display";
import { Operators } from "./Operators";
import { BlockValues } from "./BlockValues";
import { Equals } from "./Equals";

type СalculatorBlocksPropsType = {
  dragItemSource: Array<any>;
  dragItemDataDestination: Array<any>;
  isConstructorVisible: boolean;
};

export const СalculatorBlocks: React.FC<СalculatorBlocksPropsType> = ({
  dragItemSource,
  dragItemDataDestination,
  isConstructorVisible,
}) => {
  const isDisable = (sourceName: string) => {
    const result = dragItemDataDestination.find(
      (distElem) => distElem.name === sourceName
    );
    return !!result;
  };
  const getCalculatorPart = (item: any, isActive: boolean) => {
    switch (item.name) {
      case "display":
        return <Display isActive={isActive} displayValue={0} />;
      case "operators":
        return <Operators isActive={isActive} />;
      case "blockValues":
        return (
          <BlockValues
            isActive={isActive}
            setDisplayValue={() => {}}
            isConstructorVisible={isConstructorVisible}
          />
        );
      case "equals":
        return <Equals isActive={isActive} />;
      default:
        return <div></div>;
    }
  };
  return (
    <div className={styles.containerBlocks}>
      {dragItemSource.map((item, index) => {
        const isDisabled = isDisable(item.name);

        return (
          <Draggable
            draggableId={item.id.toString()}
            index={index}
            key={item.id}
            isDragDisabled={isDisabled}
          >
            {(provided, snapshot) => (
              <div>
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {getCalculatorPart(item, isDisabled)}
                </div>

                {snapshot.isDragging && (
                  <>{getCalculatorPart(item, isDisabled)}</>
                )}
              </div>
            )}
          </Draggable>
        );
      })}
    </div>
  );
};
