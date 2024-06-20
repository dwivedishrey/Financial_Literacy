import React from "react";
import "./CoursesBox.css";

const CoursesBox = ({ image, title, link }) => {
  return (
    <div className="course-box">
      <div className="course-image-container">
        <img src={image} alt={title} className="course-image" />
      </div>
      <div className="course-details">
        <h4 className="course-title">{title}</h4>
        <a
          href={link}
          className="enroll-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
};

export default CoursesBox;
