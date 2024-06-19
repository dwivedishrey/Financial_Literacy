import React from 'react';
import './Newsbox.css';

function truncateText(text, wordLimit) {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
}

const NewsBox = ({ image, title, description, link }) => {
  const truncatedDescription = truncateText(description, 15); // Adjusted word limit for a more realistic truncation
  const truncatedTitle = truncateText(title, 5);

  return (
    <div className="news-box">
      <div className="news-content">
        <img
          src={image}
          alt={title}
          className="news-image"
        />
        <h5 className="news-title">{truncatedTitle}</h5>
        <p style={{color:"black"}} className="news-description">{truncatedDescription}</p>
      </div>
      <div className="news-link">
        <a href={link} className="read-more">Read More</a>
      </div>
    </div>
  );
};

export default NewsBox;
