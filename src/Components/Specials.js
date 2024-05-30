import React from 'react';
import '../App.css';

function Specials() {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h1>Special Deals</h1>
      </div>
      <div className="specials-container">
        <div className="card-container">
          <div className="card-price">€10.99</div>
          <div className="card-title">Package 1</div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button className="card-button">Subscribe</button>
        </div>
        <div className="card-container">
          <div className="card-price">€20.99</div>
          <div className="card-title">Package 2</div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button className="card-button">Subscribe</button>
        </div>
        <div className="card-container">
          <div className="card-price">€30.99</div>
          <div className="card-title">Package 3</div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button className="card-button">Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default Specials;
