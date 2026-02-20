import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const OmdbSearch = () => {
  const [movies, setMovies] = useState([]);
  const [param, setParam] = useState("Avatar");
  const navigate = useNavigate();

  const getMovies = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=9d57be0b&s=${param}`
    );
    setMovies(res.data.Search || []);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Movie Search</h1>

      <input
        type="text"
        value={param}
        onChange={(e) => setParam(e.target.value)}
      />

      <button onClick={getMovies}>Search</button>

      <table className="table">
        <thead>
          <tr>
            <th>IMDB ID</th>
            <th>TITLE</th>
            <th>TYPE</th>
            <th>YEAR</th>
            <th>POSTER</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.imdbID}>
              <td>{movie.imdbID}</td>
              <td>{movie.Title}</td>
              <td>{movie.Type}</td>
              <td>{movie.Year}</td>
              <td>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{
                    height: "120px",
                    width: "120px",
                    cursor: "pointer"
                  }}
                  onClick={() =>
                    navigate(
                      `/MovieDetails/${movie.imdbID}/${encodeURIComponent(
                        movie.Title
                      )}`
                    )
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};