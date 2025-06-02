import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import CourseList from './components/courses/CourseList';
import CourseDetail from './components/courses/CourseDetail';
import CreateCourse from './components/courses/CreateCourse';
import Profile from './components/profile/Profile';
import './App.css';

// Component to handle navbar visibility
const AppContent = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/register', '/dashboard'];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <div className="App">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/login" 
          element={
            <div className="container">
              <Login />
            </div>
          } 
        />
        <Route 
          path="/register" 
          element={
            <div className="container">
              <Register />
            </div>
          } 
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <div className="container">
                <Dashboard />
              </div>
            </PrivateRoute>
          }
        />
        <Route 
          path="/courses" 
          element={
            <div className="container">
              <CourseList />
            </div>
          } 
        />
        <Route 
          path="/courses/:id" 
          element={
            <div className="container">
              <CourseDetail />
            </div>
          } 
        />
        <Route
          path="/create-course"
          element={
            <PrivateRoute>
              <div className="container">
                <CreateCourse />
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <div className="container">
                <Profile />
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App; 