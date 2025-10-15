import { useState } from "react";
import Home from "./pages/Home.jsx";

//import './App.css'

function App() {
  const [state, setState] = useState();

  return (
    <>
      <div>
        <h2>Header</h2>
      </div>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
