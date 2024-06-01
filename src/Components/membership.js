import React from 'react';
import '../App.css';

function Membership() {
  return (
    <section className="membership-options-section">
      <h2 className="membership-header">Membership </h2>
       <div className="membership-container">
        <div className="membership-card-container">
          <div className="membership-card-price">€10.99</div>
          <div className="membership-card-title">Package 1</div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button className="membership-card-button">Join Now</button>
        </div>
        <div className="membership-card-container">
          <div className="membership-card-price">€20.99</div>
          <div className="membership-card-title">Package 2</div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button className="membership-card-button">Join Now</button>
        </div>
        <div className="membership-card-container">
          <div className="membership-card-price">€30.99</div>
          <div className="membership-card-title">Package 3</div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button className="membership-card-button">Join Now</button>
        </div>
      </div>
    </section>
  );
}

export default Membership;
