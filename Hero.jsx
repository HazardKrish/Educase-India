import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-person.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Your Resume <br /><span className="highlight">Deserves A Yes</span> Let's Make It Happen</h1>
          <p>If Your Resume Isn't Getting Responses, It's Time For An Upgrade. Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land More Interviews.</p>
          <div className="hero-buttons">
            <Link to="/packages" className="btn btn-secondary">RESUME PACKAGES</Link>
            <Link to="/contact" className="btn btn-primary">CONTACT US</Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img src="https://i.ibb.co/6yqJd1c/hero-person.png" alt="Smiling student holding books" />
          <div className="stat-card rating-card">
            <strong>4.9</strong>
            <div className="rating-details">
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p>Instructor Rating</p>
            </div>
          </div>
          <div className="stat-card resume-card">
            <div className="resume-icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div className="resume-details">
              <strong>260+</strong>
              <p>Online Resume Created</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
