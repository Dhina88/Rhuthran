import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './PremiumProfile.css';

const PremiumProfile = () => {
  const { user } = useAuth();

  const achievements = [
    { id: 1, icon: '🏆', name: 'Master Trader', description: 'Completed all basic trading courses' },
    { id: 2, icon: '📈', name: 'Profit Hunter', description: 'Achieved 10 successful trades' },
    { id: 3, icon: '🎯', name: 'Analysis Expert', description: 'Mastered technical analysis' },
    { id: 4, icon: '⭐', name: 'Rising Star', description: 'Top performer in community' }
  ];

  const stats = [
    { id: 1, icon: '📚', label: 'Courses Completed', value: '8/12' },
    { id: 2, icon: '⏱️', label: 'Learning Hours', value: '124' },
    { id: 3, icon: '🎓', label: 'Certifications', value: '3' },
    { id: 4, icon: '💫', label: 'Success Rate', value: '92%' }
  ];

  return (
    <div className="premium-profile">
      <div className="profile-header">
        <div className="profile-cover"></div>
        <div className="profile-info">
          <div className="profile-avatar">
            {user?.name?.charAt(0)}
          </div>
          <div className="profile-details">
            <h1>{user?.name}</h1>
            <span className="premium-badge">Premium Member</span>
            <p className="profile-bio">Passionate forex trader | Technical Analysis Enthusiast</p>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h2>Trading Statistics</h2>
          <div className="stats-grid">
            {stats.map(stat => (
              <div key={stat.id} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-info">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h2>Achievements</h2>
          <div className="achievements-grid">
            {achievements.map(achievement => (
              <div key={achievement.id} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-info">
                  <h3>{achievement.name}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h2>Learning Progress</h2>
          <div className="progress-chart">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '75%' }}>
                <span className="progress-text">75% Complete</span>
              </div>
            </div>
            <div className="progress-labels">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Advanced</span>
              <span>Expert</span>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>Recent Activities</h2>
          <div className="activity-timeline">
            <div className="activity-item">
              <div className="activity-icon">📚</div>
              <div className="activity-content">
                <h4>Completed Technical Analysis Course</h4>
                <p>Finished all modules with 95% score</p>
                <span className="activity-time">2 days ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">🎯</div>
              <div className="activity-content">
                <h4>Achieved Trading Milestone</h4>
                <p>Successfully predicted market movement</p>
                <span className="activity-time">1 week ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">🏆</div>
              <div className="activity-content">
                <h4>Earned New Badge</h4>
                <p>Received "Master Trader" badge</p>
                <span className="activity-time">2 weeks ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumProfile; 