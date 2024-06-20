import * as React from 'react';
import './Navbar.css'
function Card(props) {
  return (
    <div className='card'>
      <img height='100px' src={props.image}/>
      <h3>{props.name}</h3>
      <p>{props.des}</p>
      <a href={props.link} className='btn'>
        Read More
      </a>
    </div>
  );
}
export default Card;
