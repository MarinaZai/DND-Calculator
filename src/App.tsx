import React, { useEffect, useId, useState } from "react";
import "./App.css";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Calculator } from "./components/Calculator";
import { DragItemDataDestination, DragItemSource } from "./data/data";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [dragItemSource, setDragItemSource] = useState(DragItemSource);
  const [dragItemDataDestination, setDragItemDataDestination] = useState(
    DragItemDataDestination
  );
  const [isConstructorVisible, setIsConstructorVisible] = useState(true);

  const copy = (
    source: any,
    destination: any,
    droppableSource: any,
    droppableDestination: any
  ) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index] as Object;
    destClone.splice(droppableDestination.index, 0, { ...item, id: uuidv4() });
    return destClone;
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const clonedItem = copy(
      DragItemSource,
      DragItemDataDestination,
      source,
      destination
    );
    setDragItemDataDestination((prev) => [...prev, ...(clonedItem as any)]);
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <Calculator
          dragItemSource={dragItemSource}
          dragItemDataDestination={dragItemDataDestination}
          isConstructorVisible={isConstructorVisible}
          setIsConstructorVisible={setIsConstructorVisible}
        />
      </DragDropContext>
    </div>
  );
}

export default App;
