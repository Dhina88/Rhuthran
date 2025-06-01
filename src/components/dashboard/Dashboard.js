import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [teachingCourses, setTeachingCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'x-auth-token': token
          }
        };

        // Fetch enrolled courses for students
        if (user.role === 'student') {
          const res = await axios.get('http://localhost:5000/api/courses', config);
          setEnrolledCourses(res.data.filter(course => 
            course.students.includes(user._id)
          ));
        }

        // Fetch courses created by teacher
        if (user.role === 'teacher') {
          const res = await axios.get('http://localhost:5000/api/courses', config);
          setTeachingCourses(res.data.filter(course => 
            course.instructor._id === user._id
          ));
        }

        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.msg || 'Error fetching courses');
        setLoading(false);
      }
    };

    fetchCourses();
  }, [user]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        {user.role === 'teacher' && (
          <Link to="/create-course" className="btn btn-primary">
            Create New Course
          </Link>
        )}
      </div>

      {user.role === 'student' && (
        <div className="dashboard-section">
          <h2>My Enrolled Courses</h2>
          {enrolledCourses.length === 0 ? (
            <div className="empty-state">
              <p>You haven't enrolled in any courses yet.</p>
              <Link to="/courses" className="btn btn-secondary">
                Browse Courses
              </Link>
            </div>
          ) : (
            <div className="course-grid">
              {enrolledCourses.map(course => (
                <div key={course._id} className="course-card">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span>Instructor: {course.instructor.name}</span>
                    <span>Level: {course.level}</span>
                  </div>
                  <Link to={`/courses/${course._id}`} className="btn btn-secondary">
                    Continue Learning
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {user.role === 'teacher' && (
        <div className="dashboard-section">
          <h2>My Courses</h2>
          {teachingCourses.length === 0 ? (
            <div className="empty-state">
              <p>You haven't created any courses yet.</p>
              <Link to="/create-course" className="btn btn-secondary">
                Create Your First Course
              </Link>
            </div>
          ) : (
            <div className="course-grid">
              {teachingCourses.map(course => (
                <div key={course._id} className="course-card">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span>{course.students.length} Students</span>
                    <span>Level: {course.level}</span>
                  </div>
                  <Link to={`/courses/${course._id}`} className="btn btn-secondary">
                    Manage Course
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard; 