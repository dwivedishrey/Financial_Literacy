import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import "./Navbar.css";


const About = () => {
    const style = {
        backgroundImage: `url("money4.avif")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust as needed
        padding:0
        
      };
  return (
    <div className='about-container' style={style}>
      <div className='about-text'>
      <h1>YOUR FINANCIAL HELPER</h1>
      <p>If you want to be financially free, you need to become a different person than you are today and let go of whatever has held you back in the past.” Robert Kiyosaki 
      “Formal education will make you a living; self-education will make you a fortune.” – Jim Rohn</p>
      <a href='http://localhost:3000/login' className='about-btn'>Get Started</a>
      </div>
    </div>
  )
}

export default About
