import React from "react";
import { Link } from "react-router-dom";
import "../Css/style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <div className="brand-badge">🏛️</div>
          <div>
            <div className="brand-text-main">CampusFlow</div>
            <div className="brand-text-sub">College Management</div>
          </div>
        </Link>

        <div className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/application">Apply</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
