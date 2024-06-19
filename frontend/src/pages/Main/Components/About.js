import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import "./Navbar.css";


const About = () => {
    const style = {
        backgroundImage: `url("money.webp")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust as needed
        padding:0
        
      };
  return (
    <div id="about" className='about-container' style={style}>
      <div className='about-text'>
      <h1> Your Guide to the Basics</h1>
      <p>Starting your financial journey can be overwhelming, but with the right knowledge, you can confidently manage your finances and achieve your financial goals. ArthaMarga aims to equip you with the fundamental principles of personal finance.</p>
      <a href='http://localhost:3000/login' className='about-btn'>Get Started</a>
      </div>
    </div>
  )
}

export default About
