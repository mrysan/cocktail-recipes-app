import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { useState, useEffect } from "react";
import styles from "./CocktailModal.module.css";

export default function CocktailModal({ cocktail, isOpen, setIsOpen }) {
  const recipeList = () => {
    let list = [];
    if (Object.keys(cocktail).length === 0) {
      return list;
    }
    // only load as many ingredients as there are in the recipe
    for (let i = 1; i < 16; i++) {
      if (cocktail["strMeasure" + i] || cocktail["strIngredient" + i]) {
        let ingredient = `${
          cocktail["strMeasure" + i] ? cocktail["strMeasure" + i] : ""
        } ${cocktail["strIngredient" + i]}`;
        // second item will serve as key
        list.push([ingredient, `item${i}`]);
      } else {
        return list;
      }
    }
    return list;
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={styles.dialog}
      >
        <DialogBackdrop className={styles.dialogBackdrop} />
        <div className={styles.modalContainer}>
          <DialogPanel className={styles.dialogPanel}>
            <DialogTitle>{cocktail ? cocktail.strDrink : ""}</DialogTitle>
            <Description>
              {cocktail ? cocktail.strInstructions : ""}
            </Description>

            <div>
              {recipeList().map((item) => {
                return <p key={item[1]}> {item[0]}</p>;
              })}
            </div>

            <div className={styles.modalMenu}>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
