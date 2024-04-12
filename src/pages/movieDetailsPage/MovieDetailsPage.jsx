import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import axios from "axios";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmVlMzg2YmYwOTQ2NGY4MTA5NGJmODdkODY3MzdiMyIsInN1YiI6IjY2MTZlNjdmY2E0ZjY3MDE3ZGM4ZTE5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qxul817j6sw0997Y7ybzWX3wvENEAgtOY9261cQrZd4",
              accept: "application/json",
            },
          }
        );
        setMovie(res.data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      <button type="button">Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
        />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>
          Average rating:{" "}
          {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
        </p>
        <p>Release Date: {movie.release_date}</p>
      </div>
      <div>
        <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
      </div>
      <Outlet />
    </>
  );
}
