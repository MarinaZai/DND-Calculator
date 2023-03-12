import React from "react";
import styles from "./styles.module.css";
import { Draggable, DroppableProvidedProps } from "react-beautiful-dnd";

type СalculatorBlocksPropsType = {
  dragItemSource: Array<any>;
  dragItemDataDestination: Array<any>;
};

export const СalculatorBlocks: React.FC<СalculatorBlocksPropsType> = ({
  dragItemSource,
  dragItemDataDestination,
}) => {
  const isDisable = (sourceName: string) => {
    const result = dragItemDataDestination.find(
      (distElem) => distElem.name === sourceName
    );
    return !!result;
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
                  //style={{opacity:  isDisabled === true ? 0.5 : 1 }}
                >
                  {item.component}
                </div>
                {snapshot.isDragging && <div >{item.component}</div>}
              </div>
            )}
          </Draggable>
        );
      })}
    </div>
  );
};
