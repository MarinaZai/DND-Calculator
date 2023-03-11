import React, { useState } from "react";
import "./App.css";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Calculator } from "./components/Calculator";

function App() {
  const [state, setState] = useState([]);
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
  };
  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <Calculator />
      </DragDropContext>
    </div>
  );
}

export default App;
