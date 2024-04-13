import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={css["header-page"]}>
      <NavLink to="/" className={css["header-links"]}>
        Home
      </NavLink>
      <NavLink to="/movies" className={css["header-links"]}>
        Movies
      </NavLink>
    </div>
  );
}
