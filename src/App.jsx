import { Routes, Route } from "react-router";

import Home from "./pages/Home.jsx";
import Header from "./shared/Header.jsx";
import Favorites from "./pages/Favorites.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
//import './App.css'

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
