import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import MovieDetailsPage from "./pages/movieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/movieCast/MovieCast";
import MovieReviews from "./components/movieReviews/MovieReviews";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
