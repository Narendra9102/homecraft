import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); 

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      console.log('Authenticated: true');
      setIsAuthenticated(true);
    } else {
      console.log('Authenticated: false');
      setIsAuthenticated(false);
    }
  }, []);

  
  if (isAuthenticated === null) {
    console.log('Checking authentication...');
    return <div>Loading...</div>; 
  }

  if (!isAuthenticated) {
    console.log('Redirecting to /login...');
    return <Navigate to="/login" replace />;
  }

  console.log('Rendering protected component');
  return element;
};

export default ProtectedRoute;
