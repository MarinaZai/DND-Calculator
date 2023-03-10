import { RxCross2 } from "react-icons/rx";
import { BlockValues } from "../components/Constructor/СalculatorBlocks/BlockValues";
import { Display } from "../components/Constructor/СalculatorBlocks/Display";
import { Equals } from "../components/Constructor/СalculatorBlocks/Equals";
import { Operators } from "../components/Constructor/СalculatorBlocks/Operators";
export const OperatorsData = [
  { id: 1, value: "/" },
  { id: 2, value: <RxCross2 /> },
  { id: 3, value: "-" },
  { id: 4, value: "+" },
];
export const ValuesData = [
  { id: 5, value: 1 },
  { id: 6, value: 2 },
  { id: 7, value: 3 },
  { id: 8, value: 4 },
  { id: 9, value: 5 },
  { id: 10, value: 6 },
  { id: 11, value: 7 },
  { id: 12, value: 8 },
  { id: 13, value: 9 },
];
export const DragItemData = [
  { id: 15, component: <Display /> },
  { id: 16, component: <Operators /> },
  { id: 17, component: <BlockValues /> },
  { id: 18, component: <Equals /> },
];




