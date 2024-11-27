import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Statistics from './components/Statistics/Statistics';
import Login from './components/Login/Login';
import DiaryPage from './components/DiaryPage/DiaryPage';
import TablePage from './components/TablePage/TablePage'; // Import TablePage
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Shared state for table data
  const [tableData, setTableData] = useState([
    { month: 'Jan', earning: 12000, expense: 8000 },
    { month: 'Feb', earning: 15000, expense: 11000 },
    { month: 'Mar', earning: 20000, expense: 12000 },
    { month: 'Apr', earning: 18000, expense: 9000 },
    { month: 'May', earning: 25000, expense: 14000 },
    { month: 'Jun', earning: 30000, expense: 20000 },
  ]);

  // Handle logout functionality
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // Toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode); // Toggle the theme
  };

  // Apply dark or light mode to the body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <Sidebar
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
      <div className={`main-content ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          {isAuthenticated ? (
            <>
              <Route
                path="/about"
                element={<About tableData={tableData} />}
              />
              <Route
                path="/services"
                element={<Services />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
              <Route path="/diary" element={<DiaryPage />} />
              <Route
                path="/statistics"
                element={<Statistics />}
              />
              {/* Add route for TablePage */}
              <Route
                path="/table"
                element={<TablePage tableData={tableData} setTableData={setTableData} />}
              />
            </>
          ) : (
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
