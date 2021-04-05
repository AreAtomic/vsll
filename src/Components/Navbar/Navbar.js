import React from 'react';

// images
import Logo from '../Logo/Logo';

// styles
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='/'>
          <Logo width='220' />
        </a>

        <a
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <a href='/' className='navbar-item'>
            A propos
          </a>
          <a href='/' className='navbar-item'>
            Nos coureurs
          </a>
          <a href='/' className='navbar-item'>
            Nos sponsors
          </a>
          <a href='/' className='navbar-item'>
            Nous contacter
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
