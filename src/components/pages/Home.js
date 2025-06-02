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
          <h1>Master the Markets with <br />Aurum Fx Academy</h1>
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="container">
          <h2 className="section-title">Learn from the Best</h2>
          <div className="profile-content">
            <div className="profile-image">
              <img src="/images/mentor-profile.jpg" alt="Rhuthran - Forex Trading Mentor" />
            </div>
            <div className="profile-details">
              <h3>Rhuthran</h3>
              <h4>Lead Trading Strategist & Founder</h4>
              <p>With a proven track record in forex trading and a passion for education, I've dedicated my career to helping traders master the markets. At Aurum Fx, we combine technical expertise with practical trading experience to develop traders who can consistently succeed in the dynamic world of forex trading.</p>
              <div className="achievements">
                <div className="achievement-item">
                  <span className="number">10+</span>
                  <span className="label">Years Trading Experience</span>
                </div>
                <div className="achievement-item">
                  <span className="number">1000+</span>
                  <span className="label">Successful Students</span>
                </div>
                <div className="achievement-item">
                  <span className="number">85%</span>
                  <span className="label">Student Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="container">
          <h2 className="section-title">The Aurum Fx Advantage</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Strategic Mentorship</h3>
              <p>Get personalized guidance from experienced traders who understand market dynamics and risk management</p>
            </div>
            <div className="feature-card">
              <h3>Advanced Analysis</h3>
              <p>Learn professional technical and fundamental analysis techniques used by institutional traders</p>
            </div>
            <div className="feature-card">
              <h3>Live Trading Room</h3>
              <p>Trade alongside professionals in our live trading sessions and learn real-time market analysis</p>
            </div>
            <div className="feature-card">
              <h3>Risk Management</h3>
              <p>Master proven risk management strategies that protect and grow your trading capital</p>
            </div>
            <div className="feature-card">
              <h3>Trading Psychology</h3>
              <p>Develop the mindset of successful traders and learn to manage emotions while trading</p>
            </div>
            <div className="feature-card">
              <h3>Proven Systems</h3>
              <p>Access battle-tested trading systems that deliver consistent results in any market condition</p>
            </div>
          </div>
        </div>
      </div>

      {/* Portal Features Section */}
      <div className="portal-features">
        <div className="container">
          <h2 className="section-title">Your Path to Success</h2>
          <div className="portal-features-grid">
            <div className="portal-feature-card">
              <div className="feature-icon">💰</div>
              <h3>Prop Firm Preparation</h3>
              <p>Get specialized training to pass prop firm challenges and access large trading capitals</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">📊</div>
              <h3>Daily Market Analysis</h3>
              <p>Receive professional market analysis and high-probability trading setups daily</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">📚</div>
              <h3>Comprehensive Library</h3>
              <p>Access our extensive collection of trading resources, videos, and educational materials</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Strategy Development</h3>
              <p>Learn to create and optimize your own trading strategies for consistent profits</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">💬</div>
              <h3>Personal Coaching</h3>
              <p>Get one-on-one mentoring sessions to accelerate your trading progress</p>
            </div>
            <div className="portal-feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Global Community</h3>
              <p>Join a community of dedicated traders who support and inspire each other</p>
            </div>
          </div>
          <div className="registration-cta">
            {!isAuthenticated ? (
              <div className="cta-buttons">
                <Link to="/register" className="btn btn-primary btn-large">
                  Begin Your Journey
                </Link>
                <Link to="/login" className="btn btn-secondary btn-large">
                  Member Access
                </Link>
              </div>
            ) : (
              <div className="welcome-back">
                <h2>Welcome back, {user.name}!</h2>
                <Link to="/dashboard" className="btn btn-primary btn-large">
                  Access Dashboard
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