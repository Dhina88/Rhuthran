import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

// Test credentials
const TEST_CREDENTIALS = {
  username: 'dhina',
  password: '12345',
  name: 'Dhina'
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);

  const login = (username, password) => {
    if (username === TEST_CREDENTIALS.username && password === TEST_CREDENTIALS.password) {
      setIsAuthenticated(true);
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

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setError(null);
  };

  const value = {
    isAuthenticated,
    user: currentUser,
    error,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext; 