import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../Css/style.css";

function Admin() {
  return (
    <>
      <Navbar />
      <div className="page">

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, flexWrap: "wrap", gap: 12 }} className="anim anim-d1">
          <div>
            <div className="badge badge-purple" style={{ marginBottom: 8 }}>🔐 Admin Access</div>
            <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: -1, marginBottom: 4 }}>Admin Dashboard</h1>
            <p style={{ color: "var(--muted)", fontSize: 14 }}>Manage students, faculty, and college operations.</p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <Link className="btn primary" to="/application">+ New Application</Link>
            <Link className="btn" to="/">🏠 Home</Link>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid-3 anim anim-d2" style={{ marginBottom: 28 }}>
          <div className="metric-card mc-purple">
            <div className="metric-icon fi-purple">👨‍🎓</div>
            <div className="metric-info">
              <div className="num" style={{ color: "#a89cff" }}>5,248</div>
              <div className="lbl">Total Students</div>
            </div>
          </div>
          <div className="metric-card mc-cyan">
            <div className="metric-icon fi-cyan">👩‍🏫</div>
            <div className="metric-info">
              <div className="num" style={{ color: "#7ee8fa" }}>324</div>
              <div className="lbl">Faculty Members</div>
            </div>
          </div>
          <div className="metric-card mc-pink">
            <div className="metric-icon fi-pink">📝</div>
            <div className="metric-info">
              <div className="num" style={{ color: "#ffb8ec" }}>187</div>
              <div className="lbl">Pending Applications</div>
            </div>
          </div>
          <div className="metric-card mc-green">
            <div className="metric-icon fi-green">✅</div>
            <div className="metric-info">
              <div className="num" style={{ color: "#9effc5" }}>1,042</div>
              <div className="lbl">Admissions Approved</div>
            </div>
          </div>
          <div className="metric-card mc-amber">
            <div className="metric-icon fi-amber">📚</div>
            <div className="metric-info">
              <div className="num" style={{ color: "#ffd9a0" }}>48</div>
              <div className="lbl">Active Courses</div>
            </div>
          </div>
          <div className="metric-card mc-red">
            <div className="metric-icon fi-red">🚨</div>
            <div className="metric-info">
              <div className="num" style={{ color: "#ffb0b0" }}>12</div>
              <div className="lbl">Alerts / Issues</div>
            </div>
          </div>
        </div>

        {/* Management Sections */}
        <div className="section-title anim anim-d1">Management Modules</div>
        <div className="section-subtitle anim anim-d2">Quick access to all admin operations.</div>
        <div className="grid-3 anim anim-d3" style={{ marginBottom: 32 }}>
          <div className="feature-card">
            <div className="feature-icon fi-purple">📚</div>
            <h3>Student Records</h3>
            <p>View, edit, and manage all student profiles, batch enrollment, and academic history.</p>
            <div style={{ marginTop: 14 }}><span className="badge badge-purple">5,248 Students</span></div>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-cyan">🗂️</div>
            <h3>Applications</h3>
            <p>Review new applications, approve or reject them, and track admission pipeline.</p>
            <div style={{ marginTop: 14 }}><span className="badge badge-cyan">187 Pending</span></div>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-pink">👩‍💻</div>
            <h3>Faculty</h3>
            <p>Assign departments, manage course loads, and track faculty performance metrics.</p>
            <div style={{ marginTop: 14 }}><span className="badge badge-pink">324 Faculty</span></div>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-green">📊</div>
            <h3>Results & Grades</h3>
            <p>Publish semester results, upload mark sheets, and generate grade reports.</p>
            <div style={{ marginTop: 14 }}><span className="badge badge-green">Semester 4 Active</span></div>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-amber">🗓️</div>
            <h3>Timetable</h3>
            <p>Create and manage class schedules, exam timetables, and event calendars.</p>
            <div style={{ marginTop: 14 }}><span className="badge badge-amber">2026 Schedule</span></div>
          </div>
          <div className="feature-card">
            <div className="feature-icon fi-red">⚙️</div>
            <h3>Settings</h3>
            <p>Configure system preferences, user roles, notifications, and security policies.</p>
            <div style={{ marginTop: 14 }}><span className="badge badge-purple">Admin Only</span></div>
          </div>
        </div>

        {/* Recent Applications Table */}
        <div className="section-title anim anim-d1">Recent Applications</div>
        <div className="section-subtitle anim anim-d2">Latest student applications awaiting review.</div>
        <div className="table-wrap anim anim-d3" style={{ marginBottom: 16 }}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Applied</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Arun Kumar</td><td>B.E Computer Science</td><td>12 Jan 2026</td><td><span className="badge badge-green">Approved</span></td></tr>
              <tr><td>Priya Sharma</td><td>B.E Electronics</td><td>13 Jan 2026</td><td><span className="badge badge-amber">Pending</span></td></tr>
              <tr><td>Rahul Verma</td><td>B.E Mechanical</td><td>14 Jan 2026</td><td><span className="badge badge-amber">Pending</span></td></tr>
              <tr><td>Sneha Reddy</td><td>B.E Civil</td><td>15 Jan 2026</td><td><span className="badge badge-cyan">Under Review</span></td></tr>
              <tr><td>Karthik Raja</td><td>B.E IT</td><td>16 Jan 2026</td><td><span className="badge badge-pink">Rejected</span></td></tr>
            </tbody>
          </table>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Admin;
