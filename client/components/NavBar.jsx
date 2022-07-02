import React from 'react';
import { Link } from 'react-router-dom';
import homeLogo from '../public/home_logo.png';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className='navBar'>
      <div className='navBar__home'>
        <div className='navBar__home__img'>
          <Link to='/'>
            <img src={homeLogo} alt='official home logo' />
          </Link>
        </div>
        <div className='navBar__home__subtitle'>
          Peer-to-peer support for human-factors researchers
        </div>
      </div>
      <ul>
        <li className='navBar__about'>
          <Link to='/about'>About JustReseachers</Link>
        </li>
        <li className='navBar__pledge'>
          <Link to='/pledge'>The Pledge</Link>
        </li>
        <li className='navBar__community'>
          <Link to='/community'>Community</Link>
        </li>
        <li className='navBar__resources'>
          <Link to='/resources'>Member Resources</Link>
        </li>
        <li className='navBar__sign'>
          <Link to='/singup' className='navBar__sign__button'>
            Sign Declaration
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
