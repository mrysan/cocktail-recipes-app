import styles from "./Header.module.css";
import { NavLink } from "react-router";

function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/favorites"}>Favorites</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </nav>
    </div>
  );
}

export default Header;
