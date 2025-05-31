import { useEffect, useState } from "react";
import "./index.css";

function MoviePic() {
  const key = "6fd6f05648b23fbeb9c8a3532c02a3cf";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.results) {
          setMovies(data.results);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1>Movie Pictures</h1>
        <div className="card-p">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt={movie.title}
                style={{ height: "200px" }}
                key={movie.id}
                className="movie-poster"
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default MoviePic;
