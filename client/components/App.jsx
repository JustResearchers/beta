import React from 'react';
import { StrictMode } from 'react'; //making sure it will compatible with future React batching mode
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { CssBaseline } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';
import Display from './Display';
import Home from '../pages/Home';
import About from '../pages/About';
import Pledge from '../pages/Pledge';
import Community from '../pages/Community';
import Resources from '../pages/Resources';
import SignUp from '../pages/SignUp';
import Footer from './Footer';
import '../styles/App.css';

const App = () => {
  return (
    <StrictMode>
      <div className='app'>
        <NavBar />
        <div className='app__display-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pledge' element={<Pledge />} />
            <Route path='/community' element={<Community />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </StrictMode>
  );
};

export default App;
