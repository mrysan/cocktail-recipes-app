import { NavLink } from "react-router";

export default function NotFound() {
  return (
    <div>
      <h2>Shaken, Not Found! </h2>
      <p> No lemons, no limes, and no page either! </p>
      <h3>
        <NavLink to={"/"}>🍸Serve me the Homepage🍸</NavLink>
      </h3>
    </div>
  );
}
