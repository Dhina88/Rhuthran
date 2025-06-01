import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import './Courses.css';

const CourseDetail = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/${id}`);
        setCourse(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.msg || 'Error fetching course details');
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token
        }
      };

      await axios.post(`http://localhost:5000/api/courses/${id}/enroll`, {}, config);
      setCourse({
        ...course,
        students: [...course.students, user._id]
      });
    } catch (err) {
      setError(err.response?.data?.msg || 'Error enrolling in course');
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token
        }
      };

      await axios.delete(`http://localhost:5000/api/courses/${id}`, config);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Error deleting course');
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!course) return <div className="error">Course not found</div>;

  const isEnrolled = user && course.students.includes(user._id);
  const isInstructor = user && course.instructor._id === user._id;

  return (
    <div className="course-detail">
      <div className="course-header">
        <h1>{course.title}</h1>
        {isInstructor && (
          <div className="course-actions">
            <button onClick={() => navigate(`/courses/${id}/edit`)} className="btn btn-secondary">
              Edit Course
            </button>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete Course
            </button>
          </div>
        )}
      </div>

      <div className="course-info">
        <div className="course-meta">
          <span>Instructor: {course.instructor.name}</span>
          <span>Level: {course.level}</span>
          <span>Students: {course.students.length}</span>
        </div>
        <p className="course-description">{course.description}</p>
        
        {user && !isEnrolled && !isInstructor && (
          <button onClick={handleEnroll} className="btn btn-primary">
            Enroll Now
          </button>
        )}
        {isEnrolled && (
          <div className="enrolled-status">
            <span className="enrolled-badge">✓ Enrolled</span>
          </div>
        )}
      </div>

      <div className="course-content">
        <h2>Course Content</h2>
        {course.content && course.content.length > 0 ? (
          <div className="content-list">
            {course.content.map((item, index) => (
              <div key={index} className="content-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {isEnrolled && (
                  <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Watch Video
                  </a>
                )}
                <span className="duration">{item.duration} minutes</span>
              </div>
            ))}
          </div>
        ) : (
          <p>No content available yet.</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetail; 