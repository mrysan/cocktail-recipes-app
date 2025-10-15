import { useState } from "react";

function SearchBar() {
  const [searchBarText, setSearchBarText] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchBarText("");

    // api call

    return "";
  };

  return (
    <form action="submit" onSubmit={handleSearch}>
      <label>Search Cocktail: </label>
      <input
        type="text"
        value={searchBarText}
        onChange={(event) => {
          setSearchBarText(event.target.value);
        }}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
