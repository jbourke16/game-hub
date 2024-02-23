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
            <li className="navlink"><Link to= "/"> Home </Link></li>
            <li className="navlink"><Link to= "/about"> About </Link></li>
            <li className="navlink"><Link to= "/genres"> Genres </Link></li>
          </ul></nav>)
          :
          (<div></div>)}
    </div>
  )
}

export default Nav;