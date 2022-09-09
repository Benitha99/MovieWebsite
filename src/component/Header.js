import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'




const Header = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar ">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="/image/logo.jpeg" alt="" width="30" height="24"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink  to='/' className={({isActive})=>(isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink >
          {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
        </li>
        <li class="nav-item">
        <NavLink  to='/favorite'className={({isActive})=>(isActive ? 'nav-link active' :'nav-link')}>favorite</NavLink >
          {/* <a class="nav-link" href="/favorite">Favorites</a> */}
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>



   
  <Outlet></Outlet> 
   
  </>
   
   
   
   
   
   
  )
}

export default Header
   
   
   
   
   
   
   
   {/* <header>
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

    </header> */}
 
