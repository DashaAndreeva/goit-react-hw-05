import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </div>
  );
}
