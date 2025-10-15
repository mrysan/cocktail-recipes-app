import SearchBar from "../Features/SearchBar";
import { useState } from "react";

function Home({ getCocktailByName }) {
  const [cocktailResults, setCocktailResults] = useState([]);

  const onSearch = async (cocktailName) => {
    const result = await getCocktailByName(cocktailName);
    setCocktailResults([...result.drinks]);
  };
  console.log(cocktailResults);
  return (
    <div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
export default Home;
