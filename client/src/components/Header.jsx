import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    
      <header>
          <nav>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          {/* <NavLink to="/createReview">Add a Review</NavLink> */}
          <NavLink to="/themePark">List of theme Parks</NavLink>

       
        </div>
      
        </nav>
      </header>
    
  )
}

export default Header

