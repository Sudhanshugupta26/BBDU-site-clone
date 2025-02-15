// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-section">
                <h3>REACH US</h3>
                <p>Babu Banarasi Das University</p>
                <p>BBD City, Faizabad Road, Lucknow Uttar Pradesh - 226 028 India</p>
                <p>Phone: (0)522-6196300/301/302</p>
                <p>Phone: (0)522-6196315/16/17/18</p>
                <p>Fax: (0)522-6196222</p>
                <p>Email: info@bbdu.org</p>
                <p>Website: <a href="https://bbdu.ac.in">https://bbdu.ac.in</a></p>
                <div className="social-links">
                    <a href="#">FB</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
            <div className="footer-section">
                <h3>QUICK LINKS</h3>
                <ul>
                    <li><a href="#">Academic Fee Payment</a></li>
                    <li><a href="#">Academic Calendar</a></li>
                    <li><a href="#">Alumni</a></li>
                    <li><a href="#">Download Brochure</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>EXAMINATIONS</h3>
                <ul>
                    <li><a href="#">School and Branch Code 2021-22</a></li>
                    <li><a href="#">Examination Notice</a></li>
                    <li><a href="#">Result</a></li>
                    <li><a href="#">Exam Form Submission</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>LATEST NOTICES</h3>
                <ul>
                    <li><a href="#">Government Scholarship SC_ST 2024-25</a></li>
                    <li><a href="#">Government Scholarship OBC 2024-25</a></li>
                    <li><a href="#">View More</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
