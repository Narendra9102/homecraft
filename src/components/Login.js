import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      console.log('Logged in as:', username);
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);

      console.log('Navigating to /home...');
      navigate('/home');
      console.log('Navigation attempted to /home');

      
    } catch (error) {
      console.error('Error during login:', error);
      setError('Login failed');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
        {error && <p className="error-message">{error}</p>}
      </div>
      </form>
    </div>
  );
};

export default Login;
