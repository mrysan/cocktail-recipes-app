import { Routes, Route } from "react-router";
import "./App.css";
import styles from "./App.module.css";
import Home from "./pages/Home.jsx";
import Header from "./Features/Header.jsx";
import Favorites from "./pages/Favorites.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <div className={styles.appContainer}>
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
    </div>
  );
}

export default App;
