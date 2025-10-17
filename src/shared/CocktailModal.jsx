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
  function recipeList() {
    let list = [];
    for (let i = 0; i < 15; i++) {
      list.push(<p> i </p>);
    }
    return list;
  }

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
            <DialogTitle>{cocktail.strDrink}</DialogTitle>
            <Description>{cocktail.strInstructions}</Description>
            {/* to-do: Make iterable and display as many p as there are measures */}
            {recipeList}
            <p>
              {cocktail.strMeasure1} {cocktail.strIngredient1}
            </p>
            <p>
              {cocktail.strMeasure2} {cocktail.strIngredient2}
            </p>
            <p>
              {cocktail.strMeasure3} {cocktail.strIngredient3}
            </p>

            {() => {
              let x = [];
              for (let i = 0; i < 5; i++) {
                x.push(<p>i</p>);
              }
              return x;
            }}

            <div className={styles.modalMenu}>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
