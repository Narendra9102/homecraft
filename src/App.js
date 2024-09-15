import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
