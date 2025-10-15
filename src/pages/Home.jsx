import SearchBar from "../Features/SearchBar";
import { useState } from "react";
import CocktailContainer from "../shared/CocktailContainer";

function Home({ getCocktailByName }) {
  const [cocktailResults, setCocktailResults] = useState([]);

  const onSearch = async (cocktailName) => {
    const result = await getCocktailByName(cocktailName);
    setCocktailResults([...result.drinks]);
  };
  console.log(cocktailResults);
  return (
    <>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div>
        <CocktailContainer />
      </div>
    </>
  );
}
export default Home;
