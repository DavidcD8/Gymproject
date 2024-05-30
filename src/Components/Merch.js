import React from 'react';
import '../App.css';
import merch from '../assets/images/merch.jpg'

function Merch() {
  return (
    <div className="merch-container">
      <div className="merch-text">Check out our Merch!</div>
      <div className="merch-content">
        <div className="merch-image">
          <img src={merch} alt="Merchandise" />
        </div>
        <div className="merch-description">
          <p>Description of your merchandise goes here.</p>
          <button className="merch-button">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Merch;
