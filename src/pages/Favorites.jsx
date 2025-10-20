import CocktailModal from "../shared/CocktailModal";
import { useState, useEffect } from "react";
import { getFavorites } from "../storage/favoriteCocktails";
import CocktailContainer from "../shared/CocktailContainer";

export default function Favorites() {
  const [favoriteCocktails, setFavoriteCocktails] = useState([]);

  useEffect(() => {
    const favorites = getFavorites();

    setFavoriteCocktails(Object.values(favorites));
  }, []);

  console.log();
  return (
    <>
      <div>
        <CocktailContainer cocktailList={favoriteCocktails} />
      </div>
    </>
  );
}
