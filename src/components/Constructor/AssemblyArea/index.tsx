import React from "react";
import { DragItemDataDestination } from "../../../data/data";
import { EmptyArea } from "./EmptyArea";
import styles from "./styles.module.css";
import { Draggable } from "react-beautiful-dnd";

export const AssemblyArea: React.FC = () => {
  return (
    <div className={styles.containerAssembly}>
      {DragItemDataDestination.length === 0 ? (
        <EmptyArea />
      ) : (
        DragItemDataDestination.map((item, index) => {
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
        })
      )}
    </div>
  );
};
