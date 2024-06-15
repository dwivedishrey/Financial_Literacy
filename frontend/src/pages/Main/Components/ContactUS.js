import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Typography } from '@mui/material';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const ContactUS = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w0np3vs', 'ArthaMarga-service', form.current, {
        publicKey: 'vhomNDWXqzyVZJUhc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const style = {
    backgroundImage: `url("money2.avif")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
   height:'100px', // Adjust as needed
    padding:0
  };
  return (
      <section style={style} className='contact'>
      <div className='content'>  
        <h2>Contact US</h2>
        <p>Connect with us through email and give your feedback for services provided by us, let us connect, lets earn together and grow together.
        </p>
        </div>
  
      
      <div className='contact-form'>
        <h2>Send Message</h2>
    <form ref={form} onSubmit={sendEmail}>
      <div className='input-box'>
   
    <input type="text" placeholder=' Your Name' name="user_name" />
      </div>
      <div className='input-box'>
    
    <input type="email" placeholder=' Email' name="user_email" />
      </div>
      <div className='input-box'>
  
    <textarea placeholder='Write a Message' name="message" />
      </div>
    <input className='input-box' type="submit" value="Send" />
  </form>
  </div>
      
      </section>
  )
}

export default ContactUS