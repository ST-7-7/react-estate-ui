import React from 'react';
import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";

function HomePage() {
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className="wrapper">
          <h1 className='title'>
          Find Real state & Get Your Dream Place
          </h1>
          <p className='text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p> 
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>8+</h1>
              <h2>Years of Experiences</h2>
            </div>
            <div className="box">
              <h1>100</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1500+</h1>
              <h2>Properties</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='imgContainer'>
        <img src='/bg.png' />
      </div>
    </div>
  )
}

export default HomePage;