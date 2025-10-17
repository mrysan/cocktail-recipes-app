import styles from "./CocktailCard.module.css";

function CocktailCard({ cocktail, onClick }) {
  function handleClick() {
    onClick(cocktail);
  }

  return (
    <>
      <div>
        <button className={styles.card} onClick={handleClick}>
          <h4>{cocktail.strDrink}</h4>
          <img src={cocktail.strDrinkThumb} width="150px" height="150px"></img>
        </button>
      </div>
    </>
  );
}

export default CocktailCard;
