import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=9d57be0b&i=${id}`
      );
      setMovie(res.data);
    };

    fetchDetail();
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>{movie.Title}</h1>
      <img src={movie.Poster} width="250" alt={movie.Title} />

      <p><b>Year:</b> {movie.Year}</p>
      <p><b>Genre:</b> {movie.Genre}</p>
      <p><b>Director:</b> {movie.Director}</p>
      <p><b>Actors:</b> {movie.Actors}</p>
      <p><b>Plot:</b> {movie.Plot}</p>
      <p><b>IMDB Rating:</b> {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;