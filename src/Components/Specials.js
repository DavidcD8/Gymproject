import React from 'react';
import '../App.css';

function Specials() {
  return (
    <div className="specials-container">
      <div className="card-container">
        <div className="card-title">Package 1</div>
        <div className="card-description">Description</div>
        <div className="card-price">€ 10.99</div>
        <button className="card-button">Subscribe</button>
      </div>
      <div className="card-container">
        <div className="card-title">Package 2</div>
        <div className="card-description">Description</div>
        <div className="card-price">€ 10.99</div>
        <button className="card-button">Subscribe</button>
      </div>
      <div className="card-container">
        <div className="card-title">Package 3</div>
        <div className="card-description">Description</div>
        <div className="card-price">€ 10.99</div>
        <button className="card-button">Subscribe</button>
      </div>
    </div>
  );
}

export default Specials;
