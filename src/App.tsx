import React, { useEffect, useState } from "react";
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
  const [displayValue, setDisplayValue] = useState(0);
  const [operator, setOperator] = useState("");
  const [savedDisplayValue, setSavedDisplayValue] = useState(0);
  const saveData = (selectedOperator: string) => {
    setSavedDisplayValue(displayValue);
    setOperator(selectedOperator);
    setDisplayValue(0);
  };

  const doMath = () => {
    switch (operator) {
      case "+":
        setDisplayValue(savedDisplayValue + displayValue);
        break;
      case "-":
        setDisplayValue(savedDisplayValue - displayValue);
        break;
      case "/":
        setDisplayValue(savedDisplayValue / displayValue);
        break;
      case "*":
        setDisplayValue(savedDisplayValue * displayValue);
        break;
      default:
        break;
    }
  };

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

  function removeAddedItem(index:any) {
    setDragItemDataDestination([...dragItemDataDestination.slice(0, index), ...dragItemDataDestination.slice(index + 1)]);
 }

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
  useEffect(() => {
    if (isConstructorVisible && setDisplayValue) {
      setDisplayValue(0);
    }
    if (displayValue.toString().length > 13) {
      return setDisplayValue(0);
    }
  });
  return (
    <div className="App">
      <DragDropContext 
      onDragEnd={onDragEnd}
      onDragStart={console.log}
      >
        <Calculator
          dragItemSource={dragItemSource}
          dragItemDataDestination={dragItemDataDestination}
          isConstructorVisible={isConstructorVisible}
          setIsConstructorVisible={setIsConstructorVisible}
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
          saveData={saveData}
          doMath={doMath}
          removeAddedItem={removeAddedItem}
        />
      </DragDropContext>
    </div>
  );
}

export default App;
