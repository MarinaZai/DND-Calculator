import React from "react";
import { DragItemSource } from "../../../data/data";
import styles from "./styles.module.css";
import { Draggable, DroppableProvidedProps } from "react-beautiful-dnd";

export const СalculatorBlocks: React.FC<{}> = ({}) => {
  return (
    <div className={styles.containerBlocks}>
      {DragItemSource.map((item, index) => {
        return (
          <Draggable
            draggableId={item.id.toString()}
            index={index}
            key={item.id}
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
      })}
    </div>
  );
};
