import { useState } from "react";
import { Routes, Route } from "react-router";
import { CocktailDbApi } from "the-cocktail-db";
import Home from "./pages/Home.jsx";
import Header from "./shared/Header.jsx";
import Favorites from "./pages/Favorites.jsx";
import About from "./pages/About.jsx";

const cocktailDbApi = new CocktailDbApi({
  apiKey: 1,
  version: 1,
});

//import './App.css'

function App() {
  const getCocktailByName = async (cocktailName) => {
    return await cocktailDbApi.searchCocktailsByName(cocktailName);
  };

  const [state, setState] = useState();

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home getCocktailByName={getCocktailByName} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
