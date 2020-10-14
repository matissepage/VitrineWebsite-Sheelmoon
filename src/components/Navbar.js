import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'

function Navbar() {
  const [click, SetClick] = useState(false);

  const handleClick = () => SetClick(!click);
  const CloseMobileMenu = () => SetClick(false);

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <div className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo' onClick={CloseMobileMenu}>
            Sheelmoon
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={CloseMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/info' className='nav-links' onClick={CloseMobileMenu}>
                Qui sommes-nous ?
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={CloseMobileMenu}>
                Nous contacter
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </IconContext.Provider>
    </>
    )
}

export default Navbar
