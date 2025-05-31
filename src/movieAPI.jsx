import { useEffect, useState } from "react";
import "./index.css";

function MovieAPI() {
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
        <h1>Popular Movies</h1>
        {movies.length > 0 ? (
          <div className="card">
            {movies.map((movie) => {
              const randomColor =
                "#" +
                Math.floor(Math.random() * 0xffffff)
                  .toString(16)
                  .padStart(6, "0");

              return (
                <div
                  key={movie.id}
                  className="card-item"
                  style={{ backgroundColor: randomColor }}
                >
                  <h2 className="title">{movie.title}</h2>
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt={movie.title}
                    style={{ height: "200px" }}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default MovieAPI;
