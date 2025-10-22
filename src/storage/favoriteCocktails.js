function addFavorite(cocktail) {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  favorites[cocktail.idDrink] = cocktail;
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function removeFavorite(cocktail) {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  delete favorites[cocktail.idDrink];
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// returns true if cocktail is saved as a favorite, else false
function isFavorite(cocktail) {
  if (cocktail.idDrink) {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    return favorites[cocktail.idDrink];
  }
  return false;
}

// returns an object of all the favorite cocktails
function getFavorites() {
  console.log(JSON.parse(localStorage.getItem("favorites")));
  return JSON.parse(localStorage.getItem("favorites"));
}

export { addFavorite, removeFavorite, isFavorite, getFavorites };
