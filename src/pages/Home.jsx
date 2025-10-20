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
  const [searchLetter, setSearchLetter] = useState("B");
  const [searchBarText, setSearchBarText] = useState("");
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

  useEffect(() => {
    const loadAllCocktails = async () => {
      const result = await cocktailDbApi.searchCocktailsByFirstLetter(
        searchLetter
      );
      setCocktailResults(Object.values(result.drinks));
    };
    loadAllCocktails();
    // remove from loading
  }, [searchLetter]);

  async function onSearch(cocktailName) {
    const result = await cocktailDbApi.searchCocktailsByName(cocktailName);

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
        <CocktailContainer cocktailList={cocktailResults} />
      </div>
    </>
  );
}
export default Home;
