import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import './Courses.css';

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    level: 'beginner',
    content: [{ title: '', description: '', videoUrl: '', duration: '' }]
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContentChange = (index, field, value) => {
    const newContent = [...formData.content];
    newContent[index] = {
      ...newContent[index],
      [field]: value
    };
    setFormData({
      ...formData,
      content: newContent
    });
  };

  const addContentSection = () => {
    setFormData({
      ...formData,
      content: [
        ...formData.content,
        { title: '', description: '', videoUrl: '', duration: '' }
      ]
    });
  };

  const removeContentSection = (index) => {
    const newContent = formData.content.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      content: newContent
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token
        }
      };

      await axios.post('http://localhost:5000/api/courses', formData, config);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Error creating course');
      setLoading(false);
    }
  };

  if (!user || user.role !== 'teacher') {
    return <div className="error">Not authorized to create courses</div>;
  }

  return (
    <div className="create-course">
      <h1>Create New Course</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Course Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Course Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="level">Course Level</label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="content-sections">
          <h2>Course Content</h2>
          {formData.content.map((section, index) => (
            <div key={index} className="content-section">
              <h3>Section {index + 1}</h3>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => handleContentChange(index, 'title', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={section.description}
                  onChange={(e) => handleContentChange(index, 'description', e.target.value)}
                  required
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Video URL</label>
                <input
                  type="url"
                  value={section.videoUrl}
                  onChange={(e) => handleContentChange(index, 'videoUrl', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Duration (minutes)</label>
                <input
                  type="number"
                  value={section.duration}
                  onChange={(e) => handleContentChange(index, 'duration', e.target.value)}
                  required
                  min="1"
                />
              </div>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeContentSection(index)}
                  className="btn btn-danger"
                >
                  Remove Section
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addContentSection}
            className="btn btn-secondary"
          >
            Add Section
          </button>
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Creating...' : 'Create Course'}
        </button>
      </form>
    </div>
  );
};

export default CreateCourse; 