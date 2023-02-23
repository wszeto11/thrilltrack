import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (

    <header>
      <nav>
        <div className='logoHomeAbout'>
          <div className='logoTitle'>

            <NavLink to="/" className='logo'>
              <img src='https://i.imgur.com/cLo3FJS.png' alt='theme park image' className='logoImage' />
            </NavLink>
            <h1 className='trillTrack'>ThrillTrack</h1>
          </div>
          <div className='homeAbout'>
            <div className='homeNav'>
              <NavLink to="/" className='homeLink'>Home</NavLink>
            </div>
            <div className='aboutNav'>
              <NavLink to="/about" className='aboutLink'>About</NavLink>
            </div>
          </div>
        </div>

      </nav>
    </header>

  )
}

export default Header

