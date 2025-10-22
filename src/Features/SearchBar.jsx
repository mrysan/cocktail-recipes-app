import { useState } from "react";
import styles from "./SearchBar.module.css";
function SearchBar({ onSearch }) {
  const [searchBarText, setSearchBarText] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchBarText("");
    onSearch(searchBarText.toLocaleLowerCase().trim());
  };

  return (
    <form action="submit" onSubmit={handleSearch}>
      <input
        placeholder="Search Cocktail"
        id="cocktail-search"
        type="text"
        className={styles.searchInput}
        value={searchBarText}
        onChange={(event) => {
          setSearchBarText(event.target.value);
        }}
      ></input>
      <button
        type="submit"
        disabled={searchBarText.length === 0}
        className={styles.searchButton}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
