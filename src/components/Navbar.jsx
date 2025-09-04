import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ onLogout, onLogin, isLoggedIn }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">FlavorQuest</h1>

      <div className="navbar-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/profile" className="nav-link">
          Profile
        </NavLink>

        {isLoggedIn ? (
          <button onClick={onLogout} className="btn">
            Logout
          </button>
        ) : (
          <button onClick={onLogin} className="btn">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
