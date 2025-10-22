import SearchBar from "../Features/SearchBar";
import { useState, useEffect, useRef } from "react";
import CocktailContainer from "../Features/CocktailContainer";
import { CocktailDbApi } from "the-cocktail-db";
import styles from "./Home.module.css";
function Home() {
  const [cocktailResults, setCocktailResults] = useState([]);
  const [searchLetter, setSearchLetter] = useState("A");
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const cocktailDbApi = useRef(null);

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

  function onDismissErrorClick() {
    setApiError("");
  }

  // initialize API
  useEffect(() => {
    try {
      cocktailDbApi.current = new CocktailDbApi({
        apiKey: parseInt(import.meta.env.VITE_PUBLIC_API_KEY),
        version: parseInt(import.meta.env.VITE_VERSION),
      });
    } catch (error) {
      console.error(error);
      setApiError("Failed to initialize CocktailDB API: " + error.message);
    }
  }, []);

  // load default cocktails upon first render, and whenever a letter button is clicked
  useEffect(() => {
    const loadAllCocktails = async () => {
      try {
        setIsLoading(true);
        const result = await cocktailDbApi.current.searchCocktailsByFirstLetter(
          searchLetter
        );
        setCocktailResults(Object.values(result.drinks));
      } catch (error) {
        console.log(error);
        setApiError("API ERROR HAS OCCURED: \n" + error);
      } finally {
        setIsLoading(false);
      }
    };
    if (!cocktailDbApi.current) {
      return;
    }
    loadAllCocktails();
  }, [searchLetter]);

  async function onSearch(cocktailName) {
    try {
      setIsLoading(true);
      const result = await cocktailDbApi.current.searchCocktailsByName(
        cocktailName
      );
      if (Array.isArray(result.drinks)) {
        setCocktailResults([...result.drinks]);
      }
    } catch (error) {
      console.log(error);
      setApiError("API ERROR HAS OCCURED: \n" + error);
    } finally {
      setIsLoading(false);
    }
  }

  function onLetterClick(event) {
    event.preventDefault();
    setSearchLetter(event.target.innerText);
  }

  return (
    <>
      <div className={styles.searchBarContainer}>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className={styles.buttonContainer}>
        {alphabet.map((letter) => {
          return (
            <button
              key={"cocktails_starting_" + letter}
              onClick={onLetterClick}
              className={styles.letterButton}
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
          apiError={apiError}
          onDismissErrorClick={onDismissErrorClick}
        />
      </div>
    </>
  );
}
export default Home;
