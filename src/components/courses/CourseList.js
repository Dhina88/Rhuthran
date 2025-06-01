import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import './Courses.css';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const { user } = useAuth();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/courses');
        setCourses(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.msg || 'Error fetching courses');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleEnroll = async (courseId) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token
        }
      };

      await axios.post(`http://localhost:5000/api/courses/${courseId}/enroll`, {}, config);
      
      // Update the courses list to reflect enrollment
      setCourses(courses.map(course => 
        course._id === courseId
          ? { ...course, students: [...course.students, user._id] }
          : course
      ));
    } catch (err) {
      setError(err.response?.data?.msg || 'Error enrolling in course');
    }
  };

  const filteredCourses = courses.filter(course => {
    if (filter === 'all') return true;
    return course.level === filter;
  });

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="course-list">
      <div className="course-list-header">
        <h1>Available Courses</h1>
        <div className="filter-controls">
          <label>Filter by Level:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="course-grid">
        {filteredCourses.map(course => (
          <div key={course._id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-meta">
              <span>Instructor: {course.instructor.name}</span>
              <span>Level: {course.level}</span>
              <span>Students: {course.students.length}</span>
            </div>
            <div className="course-actions">
              <Link to={`/courses/${course._id}`} className="btn btn-secondary">
                View Details
              </Link>
              {user && !course.students.includes(user._id) && (
                <button
                  onClick={() => handleEnroll(course._id)}
                  className="btn btn-primary"
                >
                  Enroll Now
                </button>
              )}
              {user && course.students.includes(user._id) && (
                <span className="enrolled-badge">Enrolled</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="empty-state">
          <p>No courses found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default CourseList; 