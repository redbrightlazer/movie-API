import React from "react";
import MovieAPI from "./movieAPI";
import MoviePic from "./movieposters";
function App() {
  const [view, setView] = React.useState(null);

  return (
    <div className="header">
      <button className="btn" onClick={() => setView("movies")}>
        Popular Movies List
      </button>
      <button className="btn" onClick={() => setView("posters")}>
        Movie Posters
      </button>
      {view === "movies" && <MovieAPI />}
      {view === "posters" && <MoviePic />}
    </div>
  );
}
export default App;
