import React from "react";
import { AssemblyArea } from "./AssemblyArea";
import { СalculatorBlocks } from "./СalculatorBlocks";
import styles from "./styles.module.css";
import { Droppable } from "react-beautiful-dnd";
export const Constructor: React.FC = () => {
  return (
    <div className={styles.containerConstructor}>
      <Droppable droppableId="droppable-1" type="PERSON">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <СalculatorBlocks />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="droppable-2" type="PERSON2">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <AssemblyArea />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
