// src/components/Header.jsx
import React from 'react';
import './Header.css'; // Importing CSS for the header

const Header = () => {
    return (
        <header className="custom-header">
            <div className="header-content">
                <div className="logo">
                    <a href="#">YourLogo</a>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="header-icons">
                    <a href="#" className="search-icon">&#128269;</a>
                    <a href="#" className="user-icon">&#128100;</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
