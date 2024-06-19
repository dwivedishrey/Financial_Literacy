import React from 'react';
import './CoursesBox.css';

const CoursesBox = ({ image, title, link }) => {
  return (
    <div className="course-box">
     
      <div className="course-details">
        <h4 className="course-title">{title}</h4>
        <a href={link} className="enroll-button">Enroll Now</a>
      </div>
    </div>
  );
};

export default CoursesBox;
