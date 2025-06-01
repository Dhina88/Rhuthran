import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Home.css';

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Client Portal</h1>
          <p className="hero-subtitle">Your gateway to professional forex education and development</p>
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
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="container">
          <h2>Meet Your Mentor</h2>
          <div className="profile-content">
            <div className="profile-image">
              <img src="/images/mentor-profile.jpg" alt="Rhuthran" />
            </div>
            <div className="profile-details">
              <h3>Rhuthran</h3>
              <h4>Professional Forex Trader & Educator</h4>
              <p>With over a decade of experience in forex trading, I've developed a comprehensive understanding of the market dynamics and successful trading strategies. My passion lies in helping aspiring traders master the art of forex trading through structured education and practical guidance.</p>
              <div className="achievements">
                <div className="achievement-item">
                  <span className="number">10+</span>
                  <span className="label">Years Trading</span>
                </div>
                <div className="achievement-item">
                  <span className="number">1000+</span>
                  <span className="label">Students Mentored</span>
                </div>
                <div className="achievement-item">
                  <span className="number">85%</span>
                  <span className="label">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
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

      {/* Portal Features Section */}
      <div className="portal-features">
        <div className="container">
          <h2>What You Can Do in Our Portal</h2>
          <div className="portal-features-grid">
            <div className="portal-feature-card">
              <div className="feature-icon">📊</div>
              <h3>Access ARC Funding</h3>
              <p>Get connected with prop firms and access funding opportunities to start your trading journey</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Connect with Brokers</h3>
              <p>Direct access to trusted forex brokers who can help you establish your trading accounts</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">📚</div>
              <h3>Educational Resources</h3>
              <p>Access comprehensive video lessons, study materials, and interactive learning resources</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">💬</div>
              <h3>Interactive Learning</h3>
              <p>Engage with lessons by asking questions and receiving personalized answers from Rhuthran</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">📈</div>
              <h3>Market Analysis</h3>
              <p>Get regular market updates and analysis to stay informed about trading opportunities</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">👥</div>
              <h3>Community Access</h3>
              <p>Join our trading community to share experiences and learn from fellow traders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 