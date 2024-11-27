import React, { useState } from 'react';
import './Login.css';
import { FaGoogle, FaApple, FaEnvelope, FaLock, FaArrowLeft } from 'react-icons/fa';

const Login = ({ setIsAuthenticated }) => {
  const [loginMethod, setLoginMethod] = useState(''); // 'google' or 'manual'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [googleEmail, setGoogleEmail] = useState('');
  const [error, setError] = useState('');
  const [userName, setUserName] = useState(''); // To store user's name for greeting
  const [showGreeting, setShowGreeting] = useState(false); // To toggle the greeting modal visibility

  const validUsers = {
    'jigar@gmail.com': { name: "Og'abek Ravshanov", password: 'jigar' },
    'example@gmail.com': { name: "Example User", password: 'example' },
    // Add more users as needed
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check login credentials based on the login method
    if (
      (loginMethod === 'manual' && validUsers[username]?.password === password) ||
      (loginMethod === 'google' && validUsers[googleEmail]?.password === password)
    ) {
      // Set the user name based on the login method
      if (loginMethod === 'manual') {
        setUserName(validUsers[username]?.name || '');
      } else if (loginMethod === 'google') {
        setUserName(validUsers[googleEmail]?.name || '');
      }

      setIsAuthenticated(true);  // Mark as authenticated
      setShowGreeting(true); // Show the greeting modal
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleGoogleLogin = () => {
    setLoginMethod('google');
  };

  const resetLoginMethod = () => {
    setLoginMethod('');
    setPassword('');
    setGoogleEmail('');
    setError('');
  };

  const closeGreeting = () => {
    setShowGreeting(false); // Close greeting modal
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>LogIn</h2>

        {/* Modal for greeting */}
        {showGreeting && (
          <div className="modal">
            <div className="modal-content">
              <h3>Dear chef {userName}, Welcome!</h3>
              <button onClick={closeGreeting}>Close</button>
            </div>
          </div>
        )}

        {/* Google Login Flow */}
        {loginMethod === 'google' ? (
          <>
            {!googleEmail ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (googleEmail) {
                    setError('');
                  } else {
                    setError('Please select an email.');
                  }
                }}
              >
                <div className="select-email-container">
                  <select
                    value={googleEmail}
                    onChange={(e) => setGoogleEmail(e.target.value)}
                    required
                  >
                    <option value="">Choose your email</option>
                    <option value="jigar@gmail.com">jigar@gmail.com</option>
                    <option value="example@gmail.com">example@gmail.com</option>
                    <option value="user1@gmail.com">user1@gmail.com</option>
                  </select>
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="btn submit-btn">
                  <FaArrowLeft className="icon" /> Next
                </button>
              </form>
            ) : (
              <form onSubmit={handleLogin}>
                <p className="selected-email">Email: {googleEmail}</p>
                <div className="password-input">
                  <FaLock className="icon" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="btn submit-btn">
                  Login
                </button>
              </form>
            )}
            <button className="btn back-btn" onClick={resetLoginMethod}>
              <FaArrowLeft className="icon" /> Back
            </button>
          </>
        ) : (
          <>
            {/* Default Login Options */}
            <button className="social-login google-login" onClick={handleGoogleLogin}>
              <FaGoogle className="icon" /> Login with Google
            </button>
            <button className="social-login apple-login" onClick={() => alert('Apple Login clicked!')}>
              <FaApple className="icon" /> Login with Apple
            </button>
            <p className="or-text">or Login with</p>
            <form onSubmit={handleLogin}>
              <div className="email-input">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="password-input">
                <FaLock className="icon" />
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="options">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit" className="btn submit-btn">
                Submit
              </button>
            </form>
            <p className="signup-text">
              Don't have an account? <a href="#">Signup</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
