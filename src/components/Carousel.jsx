// src/components/Carousel.jsx
import React, { useState } from "react";
import "./Carousel.css";

const images = [
    "https://bbdu.ac.in/wp-content/uploads/2024/12/hdr-1.jpg",
    "https://bbdu.ac.in/wp-content/uploads/2024/12/hdr-ncss-2.jpg",
    "https://bbdu.ac.in/wp-content/uploads/2021/07/ncc-activities.jpg",
    "https://bbdu.ac.in/wp-content/uploads/2024/12/hdr-4.jpg"
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <button className="carousel-btn prev" onClick={handlePrev}>
                &#10094;
            </button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
            <button className="carousel-btn next" onClick={handleNext}>
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
