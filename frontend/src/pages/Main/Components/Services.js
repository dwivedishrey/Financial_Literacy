import React from 'react'
import Card from './Card.js'
import data from './data.js'
import './Navbar.css'

const Services = () => {
    const card = data.map((item) =>(
        <Card
        image={item.img}
        name={item.name}
        des={item.des} 
        link={item.link}
       />
     ))
     
  return (
    <div id='services' className='ser'>
      <h1 className='header'>SET YOUR FINANCIAL GOAL</h1>
      <p className='ser-content'>Grow your financial confidence with videos, articles, and tips for investors both experienced and new.</p>
        <div className='header_underline'></div>      
      <div className='wrapper'>{card}</div>
    </div>
  )
}

export default Services