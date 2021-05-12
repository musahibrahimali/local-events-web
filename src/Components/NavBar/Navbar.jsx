import React, { useState } from 'react';
import { Button, Dropdown, MenuItems } from '../index';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Smart Events
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          {
            MenuItems.map((item, index) => {
              if (item.title.toLowerCase() === 'host event') {
                return (
                  <li className='nav-item' key={index} onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                    <Link className={item.cName} to={item.url} onClick={closeMobileMenu}>{item.title} <i className='fas fa-caret-down' /> </Link>
                    {dropdown && <Dropdown />}
                  </li>
                );
              } else {
                return (
                  <li className='nav-item' key={index}>
                    <Link className={item.cName} to={item.url} onClick={closeMobileMenu}>{item.title}</Link>
                  </li>
                );
              }
            })
          }
        </ul>
        <Button className>Sign Up</Button>
      </nav>
    </>
  );
}

export default Navbar;
