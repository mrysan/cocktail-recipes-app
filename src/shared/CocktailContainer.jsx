import styles from "./CocktailContainer.module.css";
import CocktailCard from "./CocktailCard";
import CocktailModal from "./CocktailModal";
import { useState } from "react";

function CocktailContainer({ cocktailList }) {
  const [modalCocktail, setModalCocktail] = useState({});
  let [isModalOpen, setIsModalOpen] = useState(false);
  function hanldeCardClick(cocktailItem) {
    setModalCocktail(cocktailItem);
    setIsModalOpen(true);
  }

  return (
    <div className={styles.container}>
      {cocktailList.length < 1 ? (
        <></>
      ) : (
        cocktailList.map((cocktailItem) => {
          return (
            <CocktailCard
              key={cocktailItem.idDrink}
              cocktail={cocktailItem}
              onClick={hanldeCardClick}
            />
          );
        })
      )}
      <CocktailModal
        cocktail={modalCocktail}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </div>
  );
}
export default CocktailContainer;
