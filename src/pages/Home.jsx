import React from "react";
import "./Home.css";
import Carousel from "../components/Carousel";

const Home = () => {
    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to BBD University</h1>
                    <p>Excellence in Education</p>
                    <Carousel />
                </div>
            </section>

            <section className="banner">
                <div className="banner-text">
                    <a href="/news">Upcoming Events</a>
                    <a href="/courses">New Courses Available</a>
                    <a href="/admissions">Admissions Open</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </section>

            <section className="about">
                <h2>Why Choose Us?</h2>
                <div className="about-grid">
                    <div className="grid-item">
                        <img src="https://bbdu.ac.in/wp-content/uploads/2018/10/ranking-min.jpg" alt="Ranked No. 1" />
                        <h3>Educational Leader</h3>
                    </div>
                    <div className="grid-item">
                        <img src="https://bbdu.ac.in/wp-content/uploads/2018/10/ragging-min.jpg" alt="Anti-Ragging Campus" />
                        <h3>Anti-Ragging Campus</h3>
                    </div>
                    <div className="grid-item">
                        <img src="https://bbdu.ac.in/wp-content/uploads/2018/10/ties-up-min.jpg" alt="Tie-ups with Research Bodies" />
                        <h3>Industry Tie-ups</h3>
                    </div>
                    <div className="grid-item">
                        <img src="https://bbdu.ac.in/wp-content/uploads/2018/10/industry-min.jpg" alt="Industry Exposure" />
                        <h3>Industry Exposure</h3>
                    </div>
                    <div className="grid-item">
                        <img src="https://bbdu.ac.in/wp-content/uploads/2018/10/24x7-support-min.jpg" alt="24x7 Secured Campus" />
                        <h3>24x7 Secured Campus</h3>
                    </div>
                    <div className="grid-item">
                        <img src="https://bbdu.ac.in/wp-content/uploads/2018/10/medical-min.jpg" alt="Medical Facilities in Campus" />
                        <h3>Medical Facilities</h3>
                    </div>
                </div>
            </section>
            <section className="featured-courses">
                <h2>Featured Courses</h2>
                <div className="courses-list">
                    <div className="course-card">
                        <img src="https://bbdu.ac.in/wp-content/uploads/2018/02/engineering.png" alt="Engineering" />
                        <h3>Engineering</h3>
                        <p>Explore the diverse fields of engineering with hands-on learning and expert faculty.</p>
                    </div>
                    <div className="course-card">
                        <img src="https://bbdu.ac.in/wp-content/uploads/2018/02/8.png" alt="Management" />
                        <h3>Management</h3>
                        <p>Develop your leadership skills and strategic thinking with our management programs.</p>
                    </div>
                    <div className="course-card">
                        <img src="https://bbdu.ac.in/wp-content/uploads/2018/02/3-5.png" alt="Legal Studies" />
                        <h3>Legal Studies</h3>
                        <p>Gain deep insights into law, ethics, and the legal system in a rapidly changing world.</p>
                    </div>
                    <div className="course-card">
                        <img src="https://bbdu.ac.in/wp-content/uploads/2018/02/4-4.png" alt="Pharmacy" />
                        <h3>Pharmacy</h3>
                        <p>Learn about pharmaceutical sciences and prepare for a career in healthcare.</p>
                    </div>
                    <div className="course-card">
                        <img src="https://bbdu.ac.in/wp-content/uploads/2018/07/architecture-1.png" alt="Architecture" />
                        <h3>Architecture</h3>
                        <p>Shape the future of the built environment through creativity and innovative design.</p>
                    </div>
                    <div className="course-card">
                        <img src="https://bbdu.ac.in/wp-content/uploads/2018/04/bca.png" alt="Computer Application" />
                        <h3>Computer Application</h3>
                        <p>Master the latest technology trends and applications in the field of computer science.</p>
                    </div>
                </div>
            </section>

            <section className="news">
                <h2>Latest News</h2>
                <ul>
                    <li>Upcoming event on campus</li>
                    <li>New courses available for the upcoming semester</li>
                </ul>
            </section>
        </main>
    );
};

export default Home;