import React from "react";
import "./Courses.css";
import Header from "../components/Header";
import CoursesBox from "./Coursesbox";
import image1 from "../../../assets/as1.png";
import image2 from "../../../assets/as2.png";
import image3 from "../../../assets/as3.png";
import image4 from "../../../assets/as4.png";
import image5 from "../../../assets/as5.png";
import image6 from "../../../assets/as6.png";

const Courses = () => {
  // Array of course data
  const courses = [
    {
      image: image1,
      title: "Coursera: Learn Essential Financial Literacy Skills",
      link: "https://www.coursera.org/learn/financial-planning",
    },
    {
      image: image2,
      title: "Khan Academy: Finance and Capital Markets",
      link: "https://www.khanacademy.org/economics-finance-domain/core-finance/housing",
    },
    {
      image: image3,
      title: "Udemy: Finance Fundamentals Courses",
      link: "https://www.udemy.com/topic/finance/",
    },
    {
      image: image4,
      title: "edX: Personal Finance for Beginners",
      link: "https://www.edx.org/course/personal-finance",
    },
    {
      image: image5,
      title: "FutureLearn: Finance & Accounting Courses",
      link: "https://www.futurelearn.com/subjects/business-and-management-courses/finance-and-accounting",
    },
    {
      image: image6,
      title: "Skillshare: Stock Market Fundamentals",
      link: "https://www.skillshare.com/en/classes/stock-market-fundamentals/1905172477?via=browse",
    },
    // Add more courses as needed
  ];

  return (
    <div className="courses-container">
      {/* HEADER */}
      <div className="courses-header">
        <h2 style={{ color: "black" }} className="courses-title">
          Courses
          <h3>Basic Courses are FREE for womens!!</h3>
        </h2>
        <hr className="header-line" />
      </div>

      {/* GRID & CHARTS */}
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="grid-item">
            <CoursesBox
              image={course.image}
              title={course.title}
              link={course.link}
            />
          </div>
        ))}

        {/* Example of a "Read More" or "Explore More" link */}
        <div className="grid-item">
          <div className="read-more">
            <a href="/explore" className="read-more-link">
              Explore More Courses
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
