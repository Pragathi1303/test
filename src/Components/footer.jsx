import React from "react";
import { Link } from "react-router-dom";
import "../Css/style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className="brand-badge" style={{ width: 36, height: 36, fontSize: 16, borderRadius: 12 }}>🏛️</div>
            <div className="brand-text-main" style={{ fontSize: 15 }}>CampusFlow</div>
          </div>
          <p>A modern college management system designed for students, faculty, and administrators.</p>
        </div>

        <div className="footer-col">
          <h4>Students</h4>
          <Link to="/login">Student Login</Link>
          <Link to="/signup">Register</Link>
          <Link to="/application">Apply Now</Link>
          <Link to="/forgot">Reset Password</Link>
        </div>

        <div className="footer-col">
          <h4>College</h4>
          <Link to="/about">About SECE</Link>
          <Link to="/admin">Admin Panel</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 CampusFlow — Sri Eshwar College of Engineering</span>
        <span>Made with <span>♥</span> for students</span>
      </div>
    </footer>
  );
}

export default Footer;
