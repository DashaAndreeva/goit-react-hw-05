import { NavLink } from "react-router-dom";

export default function MovieList({ movies }) {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
              />
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
