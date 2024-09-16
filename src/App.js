import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

function ProtectedRoute({ element }) {
  const isAuthenticated = () => {
    const token = localStorage.getItem('access_token');
    return token !== null;
  };

  return isAuthenticated() ? element : <Navigate to="/login" replace />;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={<ProtectedRoute element={<Home />} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
