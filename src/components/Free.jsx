import React from 'react';
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import release2 from "../assets/release2.png";
import Rak from "../assets/Rak.png";


export default function Free() {
  return (
    <div className='free'>
        <div className="container">
          <div className="background">
            <div className="ellipse purple"></div>
            <div className="ellipse green"></div>
          </div>
          <div className="content">
            <div className="image">
              <img src={Rak} alt="icon" />
            </div>
            <h2 className="title">Free NFT for early birds</h2>
            <p className="description">Sign up and get a free NFT</p>
          </div>
        </div>
        <div className="cards">
          <div className="card1"></div>
          <div className="card2"></div>
        </div>





    </div>
  )
}
