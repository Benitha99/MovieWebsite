import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import movies from "../movies.json";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const SingleMovie = () => {

  const [fav, setFav] = useState(getLocalItems());
  const addItems = (singlemovie) => {
    setFav([...fav, singlemovie[0]]);
    const button=document.querySelector('.controls .btn')
    button.style.backgroundColor='red'
    
  };
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(fav));
  }, [fav]);

  const { movieId } = useParams();
  const singlemovie = movies.filter((movie) => movie.id == movieId);

  

  return (
    <div className="container">
      <div className="result-card">
        
            <img
              src={singlemovie[0].posterUrl}
              alt={singlemovie.title}
              class="card-img-top"
            />
           
            <div className="info">
              <div className="head">
                <h3 className="title">{singlemovie[0].title}</h3>
                <div className="release-date">{singlemovie[0].year}</div>
                <div className="actors">{singlemovie[0].actors}</div>
                <div className="director">{singlemovie[0].director}</div>
                <div className="description">{singlemovie[0].description}</div>
                <div className="category">{singlemovie[0].category}</div>
              </div>
              <div className='controls'>
                      <button className='btn' onClick={()=>addItems(singlemovie)}>
                        Add to favorite
                      </button>
                    </div>
            
            </div>
            </div>  
        </div>
     
    
  );
};

export default SingleMovie;
