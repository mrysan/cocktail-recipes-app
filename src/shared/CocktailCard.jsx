import styles from "./CocktailCard.module.css";

function CocktailCard({ cocktail, onClick }) {
  function handleClick() {
    onClick(cocktail);
  }

  return (
    <>
      <div className={styles.cardContainer}>
        <button className={styles.card} onClick={handleClick}>
          <p className={styles.cardTitle}>{cocktail.strDrink}</p>
          <img
            className={styles.cocktailImage}
            src={cocktail.strDrinkThumb}
          ></img>
        </button>
      </div>
    </>
  );
}

export default CocktailCard;
