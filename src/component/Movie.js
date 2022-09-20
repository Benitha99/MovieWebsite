import React from "react";
import { Link } from "react-router-dom";
import movies from "../movies.json";


const Movie = (props) => {
 

const searches = localStorage.getItem("searches")

console.log(searches)

  return (
    <div className="container-fluid">
      <div class="row g-3 ">
      <h4>Movies</h4>
        {movies.map((movie) => {
          return (
            <div class="col-md-2">
              <div class="card-h-20 " key={movie.id}>
                <article key={movie.id}>
                  <Link to={`/Movie/${movie.id}`}>
                    
                    <img
                      src={movie.posterUrl}
                      class="card-img-top"
                      alt={movie.title}
                    />
                  </Link>
                </article>

                <div class="card-body">
                  <h5 class="card-title">{movie.title}</h5>
                </div>

               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movie;

//     <div className="container">
//       {movies.map((movie) => {
//         return (
//           <>
//           <div className="result-card" key={movie.id}>

//               <img src={movie.posterUrl} alt={movie.title} />
//             </div>

//                 <button className="btn" onClick={() => addItems(movie)}>
//                   Add to favorite
//                 </button>
//             </>

//         );
//       })}
//     </div>
//   );
// };
