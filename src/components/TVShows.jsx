import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TVShows = (props) => {
  const [searchResponse, setSearchResponse] = useState([]);

  const fetchMovies = async () => {
    try {
      const allMovies = [];
      await Promise.all(
        props.searchedMovies.map(async (movieTitle) => {
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=27737b2a&s=${movieTitle}`
          );
          let result = await response.json();
          if (result.Search) {
            // console.log("result", result);
            allMovies.push(...result.Search);
          } else {
            console.log("An error occured");
          }
        })
      );
      setSearchResponse(allMovies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    // <h1>My tv shows component page</h1>
    <div>
      {searchResponse.map((movie, index) => {
        return (
          <div
            key={index}
            className="customMovieSection text-center text-light"
          >
            <Link to={"/details/" + movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
            </Link>
            <div>{movie.Title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TVShows;
