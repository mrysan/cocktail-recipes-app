import SearchBar from "../Features/SearchBar";
import { useState } from "react";
import CocktailContainer from "../shared/CocktailContainer";

function Home({ getCocktailByName }) {
  const [cocktailResults, setCocktailResults] = useState([]);

  const onSearch = async (cocktailName) => {
    const result = await getCocktailByName(cocktailName);

    if (Array.isArray(result.drinks)) {
      setCocktailResults([...result.drinks]);
    }
  };
  console.log(cocktailResults);
  return (
    <>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div>
        <CocktailContainer cocktailList={cocktailResults} />
      </div>
    </>
  );
}
export default Home;
