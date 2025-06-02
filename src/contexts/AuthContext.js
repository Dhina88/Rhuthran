import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// Test credentials
const TEST_CREDENTIALS = {
  username: 'dhina',
  password: '12345',
  name: 'Dhina'
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Fetch user data
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/me`);
      setCurrentUser(response.data);
    } catch (err) {
      console.error('Error fetching user:', err);
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    } finally {
      setLoading(false);
    }
  };

  const login = (username, password) => {
    // Check against test credentials
    if (username === TEST_CREDENTIALS.username && password === TEST_CREDENTIALS.password) {
      setCurrentUser({
        name: TEST_CREDENTIALS.name,
        username: TEST_CREDENTIALS.username
      });
      setError(null);
      return true;
    } else {
      setError('Invalid credentials');
      return false;
    }
  };

  const register = async (formData) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, formData);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setCurrentUser(user);
      setError(null);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during registration');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setCurrentUser(null);
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
    currentUser,
    loading,
    error,
    login,
    register,
    logout,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 