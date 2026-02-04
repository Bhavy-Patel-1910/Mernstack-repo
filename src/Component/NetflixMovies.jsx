import React from 'react'
import {Link} from 'react-router-dom';

export const NetflixMovies = () => {

    var movies=[
        {movieID:1, movieName:"Dhurandhar"},
        {movieID:2, movieName:"Kantara"},
        {movieID:3, movieName:"Kill"},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>NETFLIXMOVIES</h1>
          {
            movies.map((movie)=>{
                //return <li>{movie.movieName}</li>
                return <li>
                    {/* { <Link to="/watch/{movie.mpvieName}">{movie.movieName}</Link>} */}

                    <Link to={`/watch/${movie.movieName}`}>{movie.movieName}</Link>
                </li>
            })
          }
    </div>
  )
}
