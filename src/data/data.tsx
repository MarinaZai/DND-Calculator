import { RxCross2 } from "react-icons/rx";
import { v4 as uuidv4 } from "uuid";

export const OperatorsData = [
  { id: uuidv4(), value: "/" },
  { id: uuidv4(), value: <RxCross2 /> },
  { id: uuidv4(), value: "-" },
  { id: uuidv4(), value: "+" },
];
export const ValuesData = [
  { id: uuidv4(), value: 1 },
  { id: uuidv4(), value: 2 },
  { id: uuidv4(), value: 3 },
  { id: uuidv4(), value: 4 },
  { id: uuidv4(), value: 5 },
  { id: uuidv4(), value: 6 },
  { id: uuidv4(), value: 7 },
  { id: uuidv4(), value: 8 },
  { id: uuidv4(), value: 9 },
];

export const DragItemSource = [
  { id: uuidv4(), name: "display" },
  { id: uuidv4(), name: "operators" },
  { id: uuidv4(), name: "blockValues" },
  { id: uuidv4(), name: "equals" },
];

export const DragItemDataDestination: typeof DragItemSource = [];
