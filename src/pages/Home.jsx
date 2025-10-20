import SearchBar from "../Features/SearchBar";
import { useState, useEffect } from "react";
import CocktailContainer from "../shared/CocktailContainer";
import { CocktailDbApi } from "the-cocktail-db";

const cocktailDbApi = new CocktailDbApi({
  apiKey: parseInt(import.meta.env.VITE_PUBLIC_API_KEY),
  version: parseInt(import.meta.env.VITE_VERSION),
});

function Home() {
  const [cocktailResults, setCocktailResults] = useState([]);
  const [searchLetter, setSearchLetter] = useState("A");
  const [isLoading, setIsLoading] = useState(false);
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // load default cocktails upon first render, and whenever a letter button is clicked
  useEffect(() => {
    const loadAllCocktails = async () => {
      setIsLoading(true);
      const result = await cocktailDbApi.searchCocktailsByFirstLetter(
        searchLetter
      );
      setCocktailResults(Object.values(result.drinks));
      setIsLoading(false);
    };
    loadAllCocktails();
  }, [searchLetter]);

  async function onSearch(cocktailName) {
    setIsLoading(true);
    const result = await cocktailDbApi.searchCocktailsByName(cocktailName);
    setIsLoading(false);
    if (Array.isArray(result.drinks)) {
      setCocktailResults([...result.drinks]);
    }
  }

  function onLetterClick(event) {
    event.preventDefault();
    setSearchLetter(event.target.innerText);
  }

  return (
    <>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div>
        {alphabet.map((letter) => {
          return (
            <button
              key={"cocktails_starting_" + letter}
              onClick={onLetterClick}
            >
              {letter}
            </button>
          );
        })}
      </div>
      <div>
        <CocktailContainer
          cocktailList={cocktailResults}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}
export default Home;
