import axios from "axios";
import { useState } from "react";
import SearchComponent from "./SearchComponent";
import DisplayComponent from "./DisplayComponent";

export default function HomePageComponent() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function SearchMovie(event) {
    setIsLoading(true);
    setError(null);
    axios
      .get(`http://www.omdbapi.com/?apikey=5b7da36&t=${encodeURIComponent(event.movieName)}&y=${event.releaseDate}`)
      .then((response) => {
        if (response.data.Response === "False") {
          setError(response.data.Error);
          setMovie(null);
        } else {
          setMovie(response.data);
        }
      })
      .catch(() => {
        setError("An error occurred while fetching the movie.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <SearchComponent SearchMovie={SearchMovie} />
      <DisplayComponent movie={movie} isLoading={isLoading} error={error} />
    </>
  );
}
