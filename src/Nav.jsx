import React from 'react'
import Genres from './Genres';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Spin as Hamburger} from 'hamburger-react';

function Nav() {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className="nav-bar">
      <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
        <nav>
          <ul>
            <li><Link to={'/'} Home /></li>
            <li><Link to={'/About'} About /></li>
            <li><Link to={'/Genres'} Genres /></li>
          </ul>
        </nav> 
    </div>
  )
}

export default Nav;