import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false); 

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive); 
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>HomeCraft</Link>

        <div className='navbar-menu-toggle' onClick={toggleMenu}>
          &#9776; 
        </div>

        <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
          <li><Link to='/design-templates' className='navbar-item' onClick={() => setMenuActive(false)}>Design Templates</Link></li>
          <li><Link to='/project-planning' className='navbar-item' onClick={() => setMenuActive(false)}>Project Planning</Link></li>
          <li><Link to='/progress-tracking' className='navbar-item' onClick={() => setMenuActive(false)}>Progress Tracking</Link></li>
          <li><Link to='/expert-advice' className='navbar-item' onClick={() => setMenuActive(false)}>Expert Advice</Link></li>
          <li><Link to='/community-support' className='navbar-item' onClick={() => setMenuActive(false)}>Community</Link></li>
          <li><Link to='/profile' className='navbar-item' onClick={() => setMenuActive(false)}>My Profile</Link></li>
        </ul>

        <button className='logout-button' onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
