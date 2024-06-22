//76c1ccda
import { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const API_URL = "http://www.omdbapi.com?apikey=76c1ccda";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const filtredData = await response.json();
    setMovies(filtredData.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []); // when passing the second argumant, only initial rendering is working

  return (
    <div className="app">
      <div className="search">
        <input
          placeholder="Search Here.."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Data Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
