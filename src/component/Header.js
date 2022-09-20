import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import movies from "../movies.json";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // const search = movies.filter((movie) => {
  //   return movie.title.toLowerCase().includes(searchTerm?.toLowerCase());
  // });

  // useEffect(() => {
  //   if(search){
  //     localStorage.setItem("searches", search)
  //   }
  // }, [search]);


  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/image/logo.jpeg" alt="" width="30" height="24" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
                {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
              </li>
              <li class="nav-item">
                <NavLink
                  to="/favorite"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  favorite
                </NavLink>
                {/* <a class="nav-link" href="/favorite">Favorites</a> */}
              </li>

              <li class="nav-item">
                <NavLink
                  to="/Action"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Action
                </NavLink>
                {/* <a class="nav-link" href="/favorite">Favorites</a> */}
              </li>

              <li class="nav-item">
                <NavLink
                  to="/Romantic"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Romantic
                </NavLink>
                {/* <a class="nav-link" href="/favorite">Favorites</a> */}
              </li>

              <li class="nav-item">
                <NavLink
                  to="/Comedy"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Comedy
                </NavLink>
                {/* <a class="nav-link" href="/favorite">Favorites</a> */}
              </li>

              <li class="nav-item">
                <NavLink
                  to="/Anime"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Anime
                </NavLink>
                {/* <a class="nav-link" href="/favorite">Favorites</a> */}
              </li>

              
          
            </ul>

            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

       {
          movies
          .filter((movie)=>{
            if(searchTerm==""){
              return "";

            }else if(movie.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return movie
            }
          })
          .map((movie)=>{
            return(
              <>
              <div class="col-md-2">
              <div class="card-h-20 " key={movie.id}>
              <h4>Search</h4>
              <article key={movie.id}>
                  <Link to={`/Movie/${movie.id}`}>
                    
                    <img
                      src={movie.posterUrl}
                      class="card-img-top"
                      alt={movie.title}
                    />
                  </Link>
                </article>
        
                </div>
               
                </div>
                <hr />
                </>
                 
            )
          })
          
        } 
   

      <Outlet/>
    </>
  );
};

export default Header;

{
  /* <header>
       <div className='container'>
           <div className='inner-content'>
               <div className='brand'>
               <Link to="/" >Movies</Link>
               </div>
               <ul className='nav-links'>
                   <li>
                     
                       <Link to="/add">Favourite</Link>
                   </li>
               </ul>
           </div>
       </div>

    </header> */
}
