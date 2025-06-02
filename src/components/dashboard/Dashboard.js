import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <div className="user-profile">
          <div className="user-avatar">
            {user?.name?.charAt(0)}
          </div>
          <h3>{user?.name}</h3>
          <p>Premium Member</p>
        </div>
        <nav className="dashboard-nav">
          <Link to="/dashboard" className="nav-item active">
            <span className="icon">📊</span>
            Dashboard
          </Link>
          <Link to="/courses" className="nav-item">
            <span className="icon">📚</span>
            My Courses
          </Link>
          <Link to="/live-trading" className="nav-item">
            <span className="icon">📈</span>
            Live Trading
          </Link>
          <Link to="/analysis" className="nav-item">
            <span className="icon">🎯</span>
            Market Analysis
          </Link>
          <Link to="/community" className="nav-item">
            <span className="icon">👥</span>
            Community
          </Link>
          <Link to="/resources" className="nav-item">
            <span className="icon">📱</span>
            Resources
          </Link>
        </nav>
      </div>

      <div className="dashboard-main">
        <div className="dashboard-header">
          <div className="welcome-section">
            <h1>Welcome back, {user?.name}</h1>
            <p>Here's what's happening with your trading journey</p>
          </div>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-info">
              <h3>Course Progress</h3>
              <p className="stat-value">75%</p>
              <p className="stat-label">Overall Completion</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-info">
              <h3>Learning Hours</h3>
              <p className="stat-value">24h</p>
              <p className="stat-label">This Month</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <h3>Trading Score</h3>
              <p className="stat-value">85</p>
              <p className="stat-label">Performance Rating</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-info">
              <h3>Achievements</h3>
              <p className="stat-value">12</p>
              <p className="stat-label">Badges Earned</p>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="content-section">
            <div className="section-header">
              <h2>Current Courses</h2>
              <Link to="/courses" className="btn btn-secondary">View All</Link>
            </div>
            <div className="course-cards">
              <div className="course-card">
                <div className="course-progress">
                  <div className="progress-bar" style={{ width: '75%' }}></div>
                </div>
                <h3>Forex Fundamentals</h3>
                <p>Master the basics of forex trading</p>
                <Link to="/course/1" className="btn btn-primary">Continue</Link>
              </div>
              <div className="course-card">
                <div className="course-progress">
                  <div className="progress-bar" style={{ width: '45%' }}></div>
                </div>
                <h3>Technical Analysis</h3>
                <p>Learn advanced chart patterns</p>
                <Link to="/course/2" className="btn btn-primary">Continue</Link>
              </div>
            </div>
          </div>

          <div className="content-section">
            <div className="section-header">
              <h2>Upcoming Live Sessions</h2>
              <Link to="/sessions" className="btn btn-secondary">View All</Link>
            </div>
            <div className="session-cards">
              <div className="session-card">
                <div className="session-time">
                  <span className="date">JUN 15</span>
                  <span className="time">10:00 AM</span>
                </div>
                <div className="session-info">
                  <h3>Live Market Analysis</h3>
                  <p>Join our expert analysts for live market breakdown</p>
                </div>
                <button className="btn btn-primary">Join Session</button>
              </div>
              <div className="session-card">
                <div className="session-time">
                  <span className="date">JUN 16</span>
                  <span className="time">2:00 PM</span>
                </div>
                <div className="session-info">
                  <h3>Trading Strategy Workshop</h3>
                  <p>Learn to develop your own trading strategy</p>
                </div>
                <button className="btn btn-primary">Join Session</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 