import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <h2 className="heading">Welcome to HomeCraft</h2>
          <p className="subheading">Building Dreams, One Home at a Time</p>
          <p className="description">
            HomeCraft is your trusted companion in turning your dream home into reality. We provide the tools, guidance, and resources you need for a seamless and efficient home-building process.
          </p>

          <div className="features">
            <div className="feature">
              <h3 className="feature-title">Design Your Home</h3>
              <p className="feature-description">
                Browse our personalized house design templates, complete with architectural layouts and 3D visualizations.
              </p>
              <Link to="/design-templates" className="feature-link">
                <button className="feature-button">Start Designing</button>
              </Link>
            </div>

            <div className="feature">
              <h3 className="feature-title">Plan Your Project</h3>
              <p className="feature-description">
                Create detailed project plans with our 3-month or 6-month construction timelines, breaking down tasks and materials.
              </p>
              <Link to="/project-planning" className="feature-link">
                <button className="feature-button">Plan Now</button>
              </Link>
            </div>

            <div className="feature">
              <h3 className="feature-title">Track Your Progress</h3>
              <p className="feature-description">
                Stay on track with our progress management tools, set reminders, and monitor your project's milestones.
              </p>
              <Link to="/progress-tracking" className="feature-link">
                <button className="feature-button">Track Progress</button>
              </Link>
            </div>

            <div className="feature">
              <h3 className="feature-title">Get Expert Advice</h3>
              <p className="feature-description">
                Access expert advice and tips on construction, materials, and design to ensure your project runs smoothly.
              </p>
              <Link to="/expert-advice" className="feature-link">
                <button className="feature-button">Get Advice</button>
              </Link>
            </div>

            <div className="feature">
              <h3 className="feature-title">Find Rentals & PGs</h3>
              <p className="feature-description">
                Search for rental rooms, PG accommodations, and get guidance on buying ventures.
              </p>
              <Link to="/rental-search" className="feature-link">
                <button className="feature-button">Find Rentals</button>
              </Link>
            </div>

            <div className="feature">
              <h3 className="feature-title">Community & Forum</h3>
              <p className="feature-description">
              Join our community forum to connect with other home builders, share experiences, and get support from like-minded people.
              </p>
              <Link to="/expert-advice" className="feature-link">
                <button className="feature-button">Join the Community</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
