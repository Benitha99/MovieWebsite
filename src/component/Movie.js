import React,{useState,useEffect} from 'react'
import movies from '../movies.json'

const getLocalItems=()=>{
  let list=localStorage.getItem('lists');
  console.log(list);
  if(list){
      return JSON.parse(localStorage.getItem('lists'))
  }else{
      return [];
  }
}

const Movie = () => {
 
const[fav,setFav]=useState(getLocalItems());
const addItems=(movie)=>{

setFav([...fav,movie.title])
console.log(fav)
}
useEffect(()=>{
  localStorage.setItem('lists',JSON.stringify(fav))
},[fav]);


  return (
    <>
   
        
          {
              movies.map((movie)=>{
                return(
                  <div className='result-card'>
      <div className='poster-wrapper'>
                    <img src={movie.posterUrl} alt={movie.title}/>
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
                    <div className='controls'>
                      <button className='btn' onClick={()=>addItems(movie)}>
                        Add to favorite
                      </button>
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
