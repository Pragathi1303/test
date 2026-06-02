import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../Css/style.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="page">

        {/* ── HERO ── */}
        <div className="hero">
          <section className="hero-left anim anim-d1">
            <div className="hero-kicker">
              <span className="dot" />
              Campus-ready &bull; Student-friendly &bull; Admin-powered
            </div>

            <h1>
              Welcome to<br />
              <span className="grad">SECE Campus</span>
            </h1>

            <p className="hero-sub">
              Sri Eshwar College of Engineering — a fully integrated college management
              platform for admissions, academics, results, and student life.
            </p>

            <div className="cta-row">
              <Link className="btn primary" to="/application">🎓 Apply Now</Link>
              <Link className="btn pink" to="/login">🔑 Student Login</Link>
              <Link className="btn" to="/admin">📊 Admin Panel</Link>
            </div>
          </section>

          <aside className="hero-right anim anim-d2">
            <div className="mini-card c1">
              <div className="mini-title">📥 Admissions Open</div>
              <p className="mini-text">Track leads, review applicants, and manage new batches seamlessly.</p>
            </div>
            <div className="mini-card c2">
              <div className="mini-title">📚 Courses & Subjects</div>
              <p className="mini-text">Organize semesters, subjects, and assign faculty with ease.</p>
            </div>
            <div className="mini-card c3">
              <div className="mini-title">📈 Results & Analytics</div>
              <p className="mini-text">Publish marks, generate reports, and track academic progress.</p>
            </div>
          </aside>
        </div>

        {/* ── STATS ── */}
        <div className="stats-bar anim anim-d3" style={{ marginTop: 28 }}>
          <div className="stat-card">
            <div className="stat-num" style={{ color: "#6c63ff" }}>5,200+</div>
            <div className="stat-label">Students Enrolled</div>
          </div>
          <div className="stat-card">
            <div className="stat-num" style={{ color: "#00d4ff" }}>320+</div>
            <div className="stat-label">Faculty Members</div>
          </div>
          <div className="stat-card">
            <div className="stat-num" style={{ color: "#ff6bcb" }}>48</div>
            <div className="stat-label">Departments</div>
          </div>
          <div className="stat-card">
            <div className="stat-num" style={{ color: "#43e97b" }}>98%</div>
            <div className="stat-label">Placement Rate</div>
          </div>
        </div>

        {/* ── FEATURES ── */}
        <div style={{ marginTop: 40 }}>
          <div className="section-title anim anim-d1">Platform Features</div>
          <div className="section-subtitle anim anim-d2">Everything your college needs, in one place.</div>
          <div className="grid-3 anim anim-d3">
            <div className="feature-card">
              <div className="feature-icon fi-purple">🎓</div>
              <h3>Student Portal</h3>
              <p>Secure login, registration, password recovery, and profile management for every student.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon fi-cyan">📋</div>
              <h3>Admin Dashboard</h3>
              <p>Manage students, faculty, departments, applications, and generate reports from one panel.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon fi-pink">📝</div>
              <h3>Online Applications</h3>
              <p>Digital admission forms with course selection, document uploads, and real-time status tracking.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon fi-green">📊</div>
              <h3>Academic Results</h3>
              <p>Publish semester results, grade cards, and maintain a full academic history per student.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon fi-amber">🗓️</div>
              <h3>Timetable & Events</h3>
              <p>Schedule classes, exams, and campus events with an interactive calendar system.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon fi-red">🛡️</div>
              <h3>Policies & Compliance</h3>
              <p>Built-in FAQ, Terms of Use, and Privacy Policy pages to keep your institution compliant.</p>
            </div>
          </div>
        </div>

        {/* ── CTA BANNER ── */}
        <div style={{
          marginTop: 40,
          padding: "36px 32px",
          borderRadius: 20,
          background: "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,255,0.12))",
          border: "1px solid rgba(108,99,255,0.3)",
          textAlign: "center"
        }} className="anim anim-d2">
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 10 }}>Ready to join SECE?</h2>
          <p style={{ color: "var(--muted)", marginBottom: 22 }}>Applications are open for the 2026 academic year. Apply today!</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn primary" to="/application">🚀 Start Application</Link>
            <Link className="btn" to="/about">Learn More →</Link>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Home;
