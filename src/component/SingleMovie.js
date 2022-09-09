import React from 'react'
import {  useParams } from 'react-router-dom'
import movies from "../movies.json";

const SingleMovie = () => {
    const{movieId}=useParams();
    const singlemovie=movies.find((movie)=>movie.id===movieId);
   
  return (
      <div className='container'>
   
               <img src={singlemovie.posterUrl} alt={singlemovie.title}/>
         

          </div>
     
    
  )
}

export default SingleMovie
