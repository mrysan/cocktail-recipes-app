import CocktailModal from "../shared/CocktailModal";
import { useState, useEffect } from "react";
import { getFavorites } from "../storage/favoriteCocktails";
import CocktailContainer from "../Features/CocktailContainer";

export default function Favorites() {
  const [favoriteCocktails, setFavoriteCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const favorites = getFavorites();
    if (favorites) {
      setFavoriteCocktails(Object.values(favorites));
    } else {
      setFavoriteCocktails({});
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      <div>
        <CocktailContainer
          cocktailList={favoriteCocktails}
          isLoading={isLoading}
          apiError={""}
        />
      </div>
    </>
  );
}
