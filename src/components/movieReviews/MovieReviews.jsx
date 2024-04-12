import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmVlMzg2YmYwOTQ2NGY4MTA5NGJmODdkODY3MzdiMyIsInN1YiI6IjY2MTZlNjdmY2E0ZjY3MDE3ZGM4ZTE5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qxul817j6sw0997Y7ybzWX3wvENEAgtOY9261cQrZd4",
            },
          }
        );
        setReviews(res.data.results);
      } catch (error) {
        console.log("Error: ", error);
        setError("Ooops, something went wrong, try later...", error);
      }
    };
    fetchReviews();
  }, [movieId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, idx) => (
            <li key={idx}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
}
