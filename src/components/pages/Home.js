import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Home.css';

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Client Portal</h1>
        <p>Your gateway to professional education and development</p>
        {!isAuthenticated ? (
          <div className="cta-buttons">
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
          </div>
        ) : (
          <div className="welcome-back">
            <h2>Welcome back, {user.name}!</h2>
            <Link to="/dashboard" className="btn btn-primary">
              Go to Dashboard
            </Link>
          </div>
        )}
      </div>

      <div className="features">
        <h2>Why Choose Us</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals with years of experience</p>
          </div>
          <div className="feature-card">
            <h3>Flexible Learning</h3>
            <p>Study at your own pace with our comprehensive online courses</p>
          </div>
          <div className="feature-card">
            <h3>Interactive Content</h3>
            <p>Engage with dynamic course materials and real-world projects</p>
          </div>
          <div className="feature-card">
            <h3>Community Support</h3>
            <p>Connect with fellow learners and get help when you need it</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 