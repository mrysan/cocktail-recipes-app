import { useState } from "react";
import Home from "./pages/Home.jsx";
import { CocktailDbApi } from "the-cocktail-db";
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
        <h2>Header</h2>
      </div>
      <div>
        <Home getCocktailByName={getCocktailByName} />
      </div>
    </>
  );
}

export default App;
