import React from 'react';
import niconicoNi2 from '../assets/niconicoNi2.png';

export default function Home() {
  return (
    <div className='home'>
      <div className="container">
        <div className="content">
          <p className="sub-title">Lauching Soon</p>
          <h1 className="title">NFT like no Other</h1>
          <p className="description">Don`t miss out on the Release.</p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={niconicoNi2} alt="home"/>
          </div>
          <div className="ellipse-container">
            <div className="ellipse-purple"></div>
            <div className="ellipse-orange"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
