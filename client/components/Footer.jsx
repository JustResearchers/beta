import React from 'react';
import { Link } from 'react-router-dom';
import twitter from '../public/twitter.png';
import linkedin from '../public/linkedin.png';
import JRlogo from '../public/JR_Icon@3x.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
        <li className='footer__policy'>
          <Link to='/policy'>Private Policy</Link>
        </li>
        <li className='footer__faq'>
          <Link to='/faq'>FAQ</Link>
        </li>
        <li className='footer__contact'>
          <Link to='/contact'>Contact</Link>
        </li>
        <li className='footer_socialMediaLogos'>
          <a href='https://twitter.com/home' target='_blank'>
            <img src={twitter} alt='twitter logo' />
          </a>
        </li>
        <li className='footer_socialMediaLogos'>
          <a href='https://www.linkedin.com/feed/' target='_blank'>
            <img src={linkedin} alt='linkedIn logo' />
          </a>
        </li>
        <li className='footer_JRlogo'>
          JustResearchers 2022 <img src={JRlogo} alt='JustResearchers logo' />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
