import React, { useState } from "react";
import styles from "./styles.module.css";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

export const EmptyArea: React.FC = () => {
  return (
    <div className={styles.containerEmpty}>
      <MdOutlineAddPhotoAlternate size="18px" />
      <div className={styles.emptyTitle}>
        <p>Перетащите сюда</p>
        любой элемент <br /> из левой панели
      </div>
    </div>
  );
};
