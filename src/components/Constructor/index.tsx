import React from "react";
import { AssemblyArea } from "./AssemblyArea";
import { СalculatorBlocks } from "./СalculatorBlocks";
import styles from "./styles.module.css";
import { Droppable } from "react-beautiful-dnd";
type СalculatorBlocksPropsType = {
  dragItemSource: Array<any>;
  dragItemDataDestination: Array<any>;
};
export const Constructor: React.FC<СalculatorBlocksPropsType> = ({
  dragItemSource,
  dragItemDataDestination,
}) => {
  return (
    <div className={styles.containerConstructor}>
      <Droppable droppableId="droppable-1" isDropDisabled={true}>
        {(provided, snapshot) => (
          <div 
          ref={provided.innerRef} 
          {...provided.droppableProps}
          >
            <СalculatorBlocks dragItemSource={dragItemSource} dragItemDataDestination={dragItemDataDestination} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="droppable-2">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <AssemblyArea dragItemDataDestination={dragItemDataDestination} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
