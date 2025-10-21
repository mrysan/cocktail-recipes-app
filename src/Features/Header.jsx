import styles from "./Header.module.css";
import { NavLink } from "react-router";

function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive ? styles.active : styles.inactive;
          }}
        >
          Home
        </NavLink>
        <NavLink
          to={"/favorites"}
          className={({ isActive }) => {
            return isActive ? styles.active : styles.inactive;
          }}
        >
          Favorites
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => {
            return isActive ? styles.active : styles.inactive;
          }}
        >
          About
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
