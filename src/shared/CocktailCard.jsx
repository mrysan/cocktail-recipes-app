import styles from "./CocktailCard.module.css";

function CocktailCard({ name, imageSrc }) {
  return (
    <div className={styles.card}>
      <h4>{name}</h4>
      <img src={imageSrc} width="125px" height="125px"></img>
    </div>
  );
}

export default CocktailCard;
