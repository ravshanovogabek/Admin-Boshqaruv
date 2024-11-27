import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import {
  FaBars,
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaEnvelope,
  FaChartPie,
  FaSignInAlt,
  FaSignOutAlt,
  FaMoon,
  FaSun,
  FaBook,
  FaTable, // Table icon for the new link
} from 'react-icons/fa';

const Sidebar = ({ isAuthenticated, handleLogout, toggleTheme, isDarkMode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <div className="sidebar-header">
        <FaBars className="hamburger-icon" onClick={toggleSidebar} />
        {!isCollapsed && <h2 className="sidebar-logo">Clinic<span>Care</span></h2>}
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/">
              <FaHome className="nav-icon" />
              {!isCollapsed && <span>Home</span>}
            </Link>
          </li>
          {isAuthenticated && (
            <>
              <li>
                <Link to="/about">
                  <FaInfoCircle className="nav-icon" />
                  {!isCollapsed && <span>About</span>}
                </Link>
              </li>
              
              <li>
              <Link to="/diary">
                <FaBook className="nav-icon" /> {/* Replace FaBook with an icon of your choice */}
                  {!isCollapsed && <span>Diary</span>}
              </Link>
              </li>

              <li>
                <Link to="/contact">
                  <FaEnvelope className="nav-icon" />
                  {!isCollapsed && <span>Contact</span>}
                </Link>
              </li>
              <li>
                <Link to="/statistics">
                  <FaChartPie className="nav-icon" />
                  {!isCollapsed && <span>Statistics</span>}
                </Link>
              </li>
              {/* Add Table link with styling */}
              <li>
                <Link to="/table">
                  <FaTable className="nav-icon" />
                  {!isCollapsed && <span>Table</span>}
                </Link>
              </li>
            </>
          )}
          <li>
            {isAuthenticated ? (
              <button onClick={handleLogout} className="logout-btn">
                <FaSignOutAlt className="nav-icon" />
                {!isCollapsed && <span>Logout</span>}
              </button>
            ) : (
              <Link to="/login">
                <FaSignInAlt className="nav-icon" />
                {!isCollapsed && <span>Login</span>}
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <div className="theme-toggle">
        <button onClick={toggleTheme} className={`theme-toggle-btn ${isDarkMode ? 'active' : ''}`}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
