import React from 'react';
import './ResidenceCard.css'; 

const ResidenceCard = ({ image, price, title, description }) => {
  return (
    <div className="residence-card">
      {image && image.trim() !== '' ? (
        <img src={image} alt={title} className="card-image" />
      ) : null}
      <div className="card-info">
        <span className="card-price">R$ {price}</span>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ResidenceCard; 