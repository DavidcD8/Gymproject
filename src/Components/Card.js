import React from 'react';
import '../App.css';

function Card({ title, description }) {
  return (
    <div className="card-container">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <button className="card-button">Order Now</button>
    </div>
  );
}

export default Card;
