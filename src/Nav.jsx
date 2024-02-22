import React from 'react'
import Genres from './Genres';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className="nav-bar">
        <nav>
          <ul>
            <li><Link to={'/'} Home /></li>
            <li><Link to={'/genres'} Genres /></li>
          </ul>
        </nav>
    </header>
  )
}

export default Nav;