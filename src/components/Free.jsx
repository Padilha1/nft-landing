import React from 'react';
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import release2 from "../assets/release2.png";
import eth1 from "../assets/eth1.png";
import Card from './Card';


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
              <img src={eth1} alt="icon" />
            </div>
            <h2 className="title">Free NFT for early birds</h2>
            <p className="description">Sign up and get a free NFT</p>
          </div>
        </div>
        <div className="cards">
          <div className="card1">
            <Card 
            image={super1}
            series="Floop Series"
            title="Purple Man"
            price={2.99} tag={12893} time={1}
            />
          </div>
          <div className="card2">
          <Card 
            image={super2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95} tag={15435} time={1}
            />
          </div>
        </div>





    </div>
  )
}
