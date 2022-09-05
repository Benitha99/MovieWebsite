import React from 'react'
import movies from '../movies.json'

const Movie = (props) => {

  return (
    <>
   
        
          {
              movies.map((movie)=>{
                return(
                  <div className='result-card'>
      <div className='poster-wrapper'>
                    <img src={movie.posterUrl} alt=''/>
                    </div>
                    <div className='info'>
                      <div className='header'>
                      <h3 className='title'>{movie.title}</h3>
                      <div className='release-date'> {movie.year} </div>
                      <div className='actors'>actors: {movie.actors} </div>
                      <div className='director'>Director: {movie.director} </div>
                      <div className='description'>Description: {movie.description} </div>
                      <div className='category'> {movie.category} </div>
                    </div>
                    
                  
                  </div>
                  </div> 
               
                 
                )
              })
          }
            
            
           
            
            </>
    
  )
}

export default Movie
