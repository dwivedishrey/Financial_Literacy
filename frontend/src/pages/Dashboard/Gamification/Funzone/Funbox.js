import React from 'react';
import './Funbox.css';

const Funbox = ({ image, name, link }) => {
  return (
    <div className="funbox-container">
      <div className="image-container">
        <img src={image} alt={name} className="funbox-image" />
      </div>
      <div className="funbox-details">
        <h4 className="funbox-title">{name}</h4>
      </div>
      <div className="play-button-container">
        <a href={link} className="play-button">Play Now</a>
      </div>
    </div>
  );
};

export default Funbox;
