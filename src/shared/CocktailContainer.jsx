import styles from "./CocktailContainer.module.css";
import CocktailCard from "./CocktailCard";

function CocktailContainer({ cocktailList }) {
  return (
    <div className={styles.container}>
      {cocktailList.length < 1 ? (
        <></>
      ) : (
        cocktailList.map((cocktailItem) => {
          return (
            <CocktailCard
              key={cocktailItem.idDrink}
              name={cocktailItem.strDrink}
              imageSrc={cocktailItem.strDrinkThumb}
            />
          );
        })
      )}
    </div>
  );
}
export default CocktailContainer;
