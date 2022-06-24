import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className='navBar'>
      <Link id='site-title' to='/'>
        Just Researchers
      </Link>
      <ul>
        <li>
          <Link to='/about'>About JustReseachers</Link>
        </li>
        <li>
          <Link to='/pledge'>The Pledge</Link>
        </li>
        <li>
          <Link to='/community'>Community</Link>
        </li>
        <li>
          <Link to='/resources'>Member Resources</Link>
        </li>
        <li>
          <Link to='/singup'>Sign the Declaration Now</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
