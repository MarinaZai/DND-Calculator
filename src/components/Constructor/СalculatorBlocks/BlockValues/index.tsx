import React, { useEffect } from "react";
import { ValuesData } from "../../../../data/data";
import styles from "./styles.module.css";
type BlockValuesPropsType = {
  isActive?: boolean;
  isConstructorVisible?: boolean;
  dragItemDataDestination?: any;
  setDisplayValue: React.Dispatch<React.SetStateAction<number>>
};
export const BlockValues: React.FC<BlockValuesPropsType> = ({
  isActive = false,
  isConstructorVisible,
  dragItemDataDestination,
  setDisplayValue
}) => {
  return (
    <div
      className={
        isActive ? styles.containerValuesOpacity : styles.containerValues
      }
    >
      <div className={styles.values}>
        {ValuesData.map((value: any) => {
          return (
            <div
              key={value.id}
              className={styles.value}
              onClick={(e) =>
                !isConstructorVisible && dragItemDataDestination
                  ? setDisplayValue((prev) => Number('' + (prev || "") + value.value))
                  : console.log("ffff")
              }
            >
              {value.value}
            </div>
          );
        })}
      </div>
      <div className={styles.zeroAndComma}>
        <div
          className={styles.zero}
          onClick={(e) =>
            !isConstructorVisible && dragItemDataDestination
              ? setDisplayValue((prev) => Number('' + (prev || "") + 0))
              : console.log("ffff")
          }
        >
          0
        </div>
        <div
          className={styles.comma}
          onClick={(e) =>
            !isConstructorVisible && dragItemDataDestination
              ? setDisplayValue((prev) => Number('' + (prev || "") + ''))
              : console.log("ffff")
          }
        >
          ,
        </div>
      </div>
    </div>
  );
};
