// src/components/RecruiterMarquee.jsx
import React from 'react';
import './RecruiterMarquee.css';

const RecruiterMarquee = () => {
    return (
        <div className="scroller__inner">
            <div
                className="rfm-marquee-container"
                style={{
                    '--pause-on-hover': 'running',
                    '--pause-on-click': 'running',
                    '--width': '100%',
                    '--transform': 'none',
                }}
            >
                <div
                    className="rfm-marquee"
                    style={{
                        '--play': 'running',
                        '--direction': 'normal',
                        '--duration': '5s',
                        '--delay': '0s',
                        '--iteration-count': 'infinite',
                        '--min-width': '100%',
                    }}
                >
                    <div className="rfm-initial-child-container">
                        <div className="rfm-child" style={{ '--transform': 'none' }}>
                            <img
                                src="https://www.marketing91.com/wp-content/uploads/2020/07/Business-model-of-big-bazaar.jpg"
                                alt="Recruiter 1"
                            />
                        </div>
                        <div className="rfm-child" style={{ '--transform': 'none' }}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Ola_Cabs_logo.svg/1200px-Ola_Cabs_logo.svg.png"
                                alt="Recruiter 2"
                            />
                        </div>
                        <div className="rfm-child" style={{ '--transform': 'none' }}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLCHoH5t8pEhStM-Wuc5Up4hzLxgWfr9-qDw&s"
                                alt="Recruiter 3"
                            />
                        </div>
                        <div className="rfm-child" style={{ '--transform': 'none' }}>
                            <img
                                src="https://i.pinimg.com/736x/ff/96/8d/ff968d633420f019c73ba116d9bfa8b2.jpg"
                                alt="Recruiter 4"
                            />
                        </div>
                        <div className="rfm-child" style={{ '--transform': 'none' }}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/1280px-Godrej_Logo.svg.png"
                                alt="Recruiter 5"
                            />
                        </div>
                        {/* Add more recruiter logos here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecruiterMarquee;
