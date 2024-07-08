// components/SideNav.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const SideNav: React.FC = () => {
  return (
    <nav className="sidenav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/userprofilepage:id">User Profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default SideNav;
