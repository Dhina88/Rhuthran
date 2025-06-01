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
          <h1>Welcome to Aurum Fx Portal</h1>
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile-section glass-card">
        <div className="container">
          <h2>Meet Your Mentor</h2>
          <div className="profile-content">
            <div className="profile-image">
              <img src="/images/mentor-profile.jpg" alt="Rhuthran" />
            </div>
            <div className="profile-details">
              <h3>Rhuthran</h3>
              <h4>Professional Forex Trader & Lead Instructor at Aurum Fx</h4>
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
      <div className="features glass-card">
        <h2>Why Choose Aurum Fx</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals with years of experience in live market trading</p>
          </div>
          <div className="feature-card">
            <h3>Flexible Learning</h3>
            <p>Study at your own pace with our comprehensive online courses and personalized learning paths</p>
          </div>
          <div className="feature-card">
            <h3>Interactive Content</h3>
            <p>Engage with dynamic course materials and real-world trading scenarios</p>
          </div>
          <div className="feature-card">
            <h3>Community Support</h3>
            <p>Connect with fellow traders and get help when you need it through our active community</p>
          </div>
          <div className="feature-card">
            <h3>Live Trading Sessions</h3>
            <p>Join daily live trading sessions where you can learn and trade alongside experienced professionals</p>
          </div>
          <div className="feature-card">
            <h3>Proven Track Record</h3>
            <p>Our systematic approach and proven strategies have helped countless students achieve consistent profitability</p>
          </div>
        </div>
      </div>

      {/* Portal Features Section */}
      <div className="portal-features glass-card">
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
          <div className="registration-cta">
            {!isAuthenticated ? (
              <div className="cta-buttons">
                <Link to="/register" className="btn btn-primary btn-large">
                  Get Started
                </Link>
                <Link to="/login" className="btn btn-secondary btn-large">
                  Login
                </Link>
              </div>
            ) : (
              <div className="welcome-back">
                <h2>Welcome back, {user.name}!</h2>
                <Link to="/dashboard" className="btn btn-primary btn-large">
                  Go to Dashboard
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 