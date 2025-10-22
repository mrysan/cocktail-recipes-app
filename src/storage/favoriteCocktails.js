function addFavorite(cocktail) {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  // turn "favorites" in localStorage into an object if first time adding
  if (favorites === null) {
    let temp = {};
    temp[cocktail.idDrink] = cocktail;
    localStorage.setItem("favorites", JSON.stringify(temp));
    return;
  }
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
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  if (favorites != null && Object.keys(cocktail).length > 0) {
    return favorites[cocktail.idDrink];
  }

  return false;
}

// returns an object of all the favorite cocktails
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites"));
}

export { addFavorite, removeFavorite, isFavorite, getFavorites };
