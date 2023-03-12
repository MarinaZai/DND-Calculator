import React from "react";
import { EmptyArea } from "./EmptyArea";
import styles from "./styles.module.css";
import { Draggable } from "react-beautiful-dnd";

type AssemblyAreaPropsType = {
  dragItemDataDestination: Array<any>
}

export const AssemblyArea: React.FC<AssemblyAreaPropsType> = ({dragItemDataDestination}) => {
  const isDisable = (sourceName: string) => {
    const result = dragItemDataDestination.find(
      (distElem) => distElem.name === sourceName
    );
    return !!result;
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
                  {item.component}
                </div>
              )}
            </Draggable>
          );
        })
      )}
    </div>
  );
};
