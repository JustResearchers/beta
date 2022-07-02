import React from 'react';
import community from '../public/crowd.jpg';
import exclamation from '../public/exclamation.png';
import book from '../public/book.png';
import document from '../public/docs.png';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <box className='home__left-section'>
        <div>
          <h2>
            Are you a user researcher, UX researcher, design researcher, service
            designer, or someone else who carries out user research?
          </h2>
          <br></br>
          <h2>
            Do you believe in ethical research and upholding professional
            standards?
          </h2>
        </div>
        <div>
          <img src={community} alt='image showing international connections' />
        </div>
        <div>
          <h2 className='home__left-section--purple'>
            Join our growing community of ethically-minded research
            professionals today!
          </h2>
        </div>
      </box>
      <box className='home__right-section'>
        <div className='home__right-section--yellow'>
          <img src={exclamation} alt='exclamation point icon' />
          <box>
            <h1>About the declaration</h1>
            <h3>
              Find out about the JustResearchers declaration why it was created,
              and how it aims to improve research practices
            </h3>
          </box>
        </div>
        <div className='home__right-section--red'>
          <img src={book} alt='book icon' />
          <box>
            <h1>Read and sign the declaration</h1>
            <h3>
              Read the declaration to find out what members have committed to
              and if it aligns with your own values
            </h3>
          </box>
        </div>
        <div className='home__right-section--green'>
          <img src={document} alt='document logo' />
          <box>
            <h1>Already signed the declaration</h1>
            <h3>
              See who has signed the declaration and is already making a
              committment to ethical practices in user research
            </h3>
          </box>
        </div>
      </box>
    </div>
  );
};

export default Home;
