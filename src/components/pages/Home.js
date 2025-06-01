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
          <h1>Transform Your Trading Journey with <span>Aurum Fx</span></h1>
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="container">
          <h2 className="section-title">Meet Your Mentor</h2>
          <div className="profile-content">
            <div className="profile-image">
              <img src="/images/mentor-profile.jpg" alt="Rhuthran" />
            </div>
            <div className="profile-details">
              <h3>Rhuthran</h3>
              <h4>Professional Forex Trader & Lead Instructor at Aurum Fx</h4>
              <p>With over a decade of experience in forex trading, I've developed a comprehensive understanding of market dynamics and successful trading strategies. My passion lies in helping aspiring traders master the art of forex trading through structured education and practical guidance. At Aurum Fx, we focus on developing disciplined traders who can consistently profit from the markets.</p>
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
        <div className="container">
          <h2 className="section-title">Why Choose Aurum Fx</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Expert Mentorship</h3>
              <p>Learn directly from successful traders with proven track records in live market conditions</p>
            </div>
            <div className="feature-card">
              <h3>Structured Learning</h3>
              <p>Follow our carefully designed curriculum that takes you from basics to advanced trading strategies</p>
            </div>
            <div className="feature-card">
              <h3>Live Trading Sessions</h3>
              <p>Join daily live trading sessions where you can learn and trade alongside professionals</p>
            </div>
            <div className="feature-card">
              <h3>Risk Management</h3>
              <p>Master the art of protecting your capital with our proven risk management techniques</p>
            </div>
            <div className="feature-card">
              <h3>Community Support</h3>
              <p>Join a community of dedicated traders who support and motivate each other</p>
            </div>
            <div className="feature-card">
              <h3>Proven Results</h3>
              <p>Our systematic approach has helped numerous students achieve consistent profitability</p>
            </div>
          </div>
        </div>
      </div>

      {/* Portal Features Section */}
      <div className="portal-features">
        <div className="container">
          <h2 className="section-title">What You'll Get Access To</h2>
          <div className="portal-features-grid">
            <div className="portal-feature-card">
              <div className="feature-icon">💰</div>
              <h3>Prop Firm Funding</h3>
              <p>Get connected with top prop firms and access substantial trading capital to scale your trading</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">📊</div>
              <h3>Premium Analysis</h3>
              <p>Receive daily market analysis and trading opportunities from our expert analysts</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">📚</div>
              <h3>Course Library</h3>
              <p>Access our comprehensive library of video lessons, tutorials, and trading resources</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Strategy Development</h3>
              <p>Learn to develop and refine your own trading strategies with our guidance</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">💬</div>
              <h3>1-on-1 Mentoring</h3>
              <p>Get personalized feedback and guidance through regular mentoring sessions</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Broker Support</h3>
              <p>Get assistance in selecting and setting up accounts with reliable forex brokers</p>
            </div>
          </div>
          <div className="registration-cta">
            {!isAuthenticated ? (
              <div className="cta-buttons">
                <Link to="/register" className="btn btn-primary btn-large">
                  Start Your Journey
                </Link>
                <Link to="/login" className="btn btn-secondary btn-large">
                  Member Login
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