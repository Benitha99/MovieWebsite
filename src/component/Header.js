import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
       <div className='container'>
           <div className='inner-content'>
               <div className='brand'>
                   <Link to="/">Favourite</Link>
               </div>
               <ul className='nav-links'>
                   <li>
                       <Link to="/add" className='btn'>Add Movie</Link>
                   </li>
               </ul>
           </div>
       </div>

    </header>
  )
}

export default Header