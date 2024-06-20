// Footer.js
import React from 'react';
import './Navbar';

const Footers = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are a company dedicated to providing the best service possible.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: Connect@Arthamarga.in</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
        </footer>
    );
}

export default Footers;
