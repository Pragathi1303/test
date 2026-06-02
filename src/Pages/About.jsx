import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../Css/style.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="page">

        {/* Header */}
        <div style={{ textAlign: "center", padding: "36px 0 28px" }} className="anim anim-d1">
          <div className="badge badge-purple" style={{ marginBottom: 14 }}>🏛️ Est. 1995</div>
          <h1 style={{ fontSize: 44, fontWeight: 900, letterSpacing: -1.5, marginBottom: 12 }}>
            About <span style={{
              background: "linear-gradient(90deg,#6c63ff,#00d4ff)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>CampusFlow</span>
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto", fontSize: 15, lineHeight: 1.7 }}>
            Sri Eshwar College of Engineering's modern campus management platform — built for students, faculty, and administrators.
          </p>
        </div>

        {/* Mission */}
        <div style={{
          padding: "28px 32px",
          borderRadius: 20,
          background: "linear-gradient(135deg, rgba(108,99,255,0.12), rgba(0,212,255,0.07))",
          border: "1px solid rgba(108,99,255,0.25)",
          marginBottom: 28
        }} className="anim anim-d2">
          <div className="badge badge-cyan" style={{ marginBottom: 12 }}>Our Mission</div>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>Empowering Education Through Technology</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.75, fontSize: 14 }}>
            CampusFlow was built to digitize and streamline every process at SECE — from student admissions
            to result publication. We believe technology should remove friction, not add it. Our platform
            puts students first while giving administrators the tools they need to run a world-class institution.
          </p>
        </div>

        {/* Values */}
        <div className="section-title anim anim-d1">Our Core Values</div>
        <div className="section-subtitle anim anim-d2">What drives everything we build.</div>
        <div className="grid-3 anim anim-d3" style={{ marginBottom: 36 }}>
          <div className="feature-card">
            <div className="feature-icon fi-purple">🏫</div>
            <h3>Student-First</h3>
            <p>Every feature is designed around student needs — clarity, speed, and accessibility.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-cyan">🧑‍💻</div>
            <h3>Admin Efficiency</h3>
            <p>Powerful dashboards and management tools to keep operations running smoothly.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-pink">✨</div>
            <h3>Modern Design</h3>
            <p>A beautiful, responsive interface that works on any device, any screen size.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-green">🔒</div>
            <h3>Data Security</h3>
            <p>Student and faculty data is protected with industry-standard security practices.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-amber">🌐</div>
            <h3>Always Available</h3>
            <p>Cloud-hosted with 99.9% uptime so students and staff can access it anytime.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-red">🤝</div>
            <h3>Community Driven</h3>
            <p>Built with feedback from students, faculty, and parents to continuously improve.</p>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          padding: "28px 32px",
          borderRadius: 20,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          marginBottom: 28
        }} className="anim anim-d2">
          <div className="section-title" style={{ fontSize: 22, marginBottom: 20 }}>By the Numbers</div>
          <div className="stats-bar">
            <div className="stat-card">
              <div className="stat-num" style={{ color: "#6c63ff" }}>5,200+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-card">
              <div className="stat-num" style={{ color: "#00d4ff" }}>320+</div>
              <div className="stat-label">Faculty</div>
            </div>
            <div className="stat-card">
              <div className="stat-num" style={{ color: "#ff6bcb" }}>28+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-num" style={{ color: "#43e97b" }}>48</div>
              <div className="stat-label">Programs</div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }} className="anim anim-d3">
          <Link className="btn primary" to="/application">🎓 Apply to SECE</Link>
          <Link className="btn" to="/contact" style={{ marginLeft: 12 }}>📬 Contact Us</Link>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default About;
