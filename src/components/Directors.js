import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsDetails=directors.map((director, index) => {
    return (
       <div key={index}>
        {director.name}
        
        <ul>
        <li>{director.movies}</li>
        </ul>
        
       </div>
       
    )
  })
  
  return <div>
    <h1>Directors Page</h1>
    {directorsDetails}
  </div>;
}


export default Directors;
