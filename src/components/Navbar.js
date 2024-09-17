import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');    

    navigate('/login');
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>HomeCraft</Link>
        <ul className='navbar-menu'>
          <li><Link to='/customer' className='navbar-item'>Explore Products</Link></li>
          <li><Link to='/buyer' className='navbar-item'>Find workers</Link></li>
          <li><Link to='/seller' className='navbar-item'>Join as Team</Link></li>
        </ul>
        <button className='logout-button' onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
