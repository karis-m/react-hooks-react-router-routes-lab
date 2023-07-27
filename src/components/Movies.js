import React, { useState } from "react";
import { movies } from "../data";

function Movies() {
  const moviesDetails=movies.map((movie, index) => {
    return (
       <div key={index}>
        {movie.title}
        {movie.time}
        <ul>
        <li>{movie.genres}</li>
        </ul>
        
       </div>
       
    )
  })
  
  return <div>
    <h1>Movies Page</h1>
    {moviesDetails}
  </div>;
}

export default Movies;
