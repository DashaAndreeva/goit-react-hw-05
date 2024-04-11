import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmVlMzg2YmYwOTQ2NGY4MTA5NGJmODdkODY3MzdiMyIsInN1YiI6IjY2MTZlNjdmY2E0ZjY3MDE3ZGM4ZTE5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qxul817j6sw0997Y7ybzWX3wvENEAgtOY9261cQrZd4",
              accept: "application/json",
            },
          }
        );
        console.log(res);

        setCast(res.data.cast);
      } catch (error) {
        console.log(error);
        setError("Ooops, something went wrong, try later...", error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Casts</h2>
      <ul>
        {cast.map((actor, idx) => (
          <li key={idx}>
            <div>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <span>No photo</span>
              )}
              {actor.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
