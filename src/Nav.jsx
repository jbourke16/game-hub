import React from 'react'
import Genres from './Genres';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Spin as Hamburger} from 'hamburger-react';

function Nav() {

  const [isOpen, setOpen] = useState(false)
  console.log(isOpen)
  return (
    <div className="nav-bar">
      <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
          {isOpen === true ?
          
          (<nav><ul>
            <li>Home<Link to={'/'} Home /></li>
            <li>About<Link to={'/About'} About /></li>
            <li>Genres<Link to={'/Genres'} Genres /></li>
          </ul></nav>)
          :
          (<div></div>)}
    </div>
  )
}

export default Nav;