import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { useState, useEffect } from "react";
import styles from "./CocktailModal.module.css";
import {
  addFavorite,
  removeFavorite,
  isFavorite,
} from "../storage/favoriteCocktails";

export default function CocktailModal({ cocktail, isOpen, setIsOpen }) {
  const [isModalCocktailFavorite, setisModalCocktailFavorite] = useState(false);
  const [modalCocktail, setIsModalCocktail] = useState(cocktail);

  // Used to add/remove favorite cocktails in local storage
  useEffect(() => {
    // only runs when new cocktail is clicked
    if (modalCocktail != cocktail) {
      setisModalCocktailFavorite(isFavorite(cocktail));
      setIsModalCocktail(cocktail);
      return;
    }

    if (isModalCocktailFavorite === true && !isFavorite(modalCocktail)) {
      addFavorite(modalCocktail);
      return;
    }
    if (isModalCocktailFavorite === false && isFavorite(modalCocktail)) {
      removeFavorite(modalCocktail);
      return;
    }
  }, [isModalCocktailFavorite, cocktail, modalCocktail]);

  function handleFavoriteClick() {
    setisModalCocktailFavorite(true);
  }

  function handleUnfavoriteClick() {
    setisModalCocktailFavorite(false);
  }

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
            <DialogTitle>
              {cocktail ? cocktail.strDrink : ""}
              {isModalCocktailFavorite ? (
                <button onClick={handleUnfavoriteClick}>Un-Favorite 💔</button>
              ) : (
                <button onClick={handleFavoriteClick}>Favorite ❤️</button>
              )}
            </DialogTitle>
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
