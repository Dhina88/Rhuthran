import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <nav className="landing-nav">
        <div className="nav-brand">Aurum Fx</div>
        <div className="nav-links">
          <Link to="/login" className="nav-link">Join Aurum Fx</Link>
          <Link to="/login" className="nav-link nav-cta">Members Portal</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Master Forex Trading with Aurum Fx</h1>
          <p>Join our community of successful traders and learn from industry experts</p>
          <Link to="/login" className="cta-button">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Landing; 