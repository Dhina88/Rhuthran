import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Client Portal
        </Link>
        <div className="navbar-links">
          {!isAuthenticated ? (
            <>
              <Link to="/register" className="nav-link">Join Aurum Fx</Link>
              <Link to="/login" className="nav-link">Members Portal</Link>
            </>
          ) : (
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 