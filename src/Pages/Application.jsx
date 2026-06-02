import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../Css/style.css";

const EMPTY = {
  name: "", email: "", phone: "", dob: "",
  course: "", school: "", percentage: "", city: "", bio: ""
};

function Application() {
  const [form, setForm]       = useState(EMPTY);
  const [error, setError]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setError("");
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, phone, dob, course, school, percentage, city } = form;
    if (!name || !email || !phone || !dob || !course || !school || !percentage || !city) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    // Simulate form submission (replace with real API call)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="page">
          <div className="container anim anim-d1" style={{ textAlign: "center", padding: "60px 32px" }}>
            <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
            <h2 className="page-title" style={{ textAlign: "center", marginBottom: 10 }}>Application Submitted!</h2>
            <p className="lead" style={{ marginBottom: 28 }}>
              Thank you, <strong style={{ color: "#fff" }}>{form.name}</strong>!
              We've received your application for <strong style={{ color: "#6c63ff" }}>{form.course}</strong>.
              We'll be in touch at <strong style={{ color: "#00d4ff" }}>{form.email}</strong>.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link className="btn primary" to="/">🏠 Back to Home</Link>
              <button onClick={() => { setForm(EMPTY); setSubmitted(false); }} style={{ padding: "12px 20px" }}>
                📝 Submit Another
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="page">
        <div className="container anim anim-d1">

          <div style={{ marginBottom: 28 }}>
            <div className="badge badge-green" style={{ marginBottom: 12 }}>📥 Admissions Open 2026</div>
            <h2 className="page-title">College Application Form</h2>
            <p className="lead" style={{ marginTop: 6 }}>Fill in your details carefully. All fields are required.</p>
          </div>

          {error && (
            <div style={{
              padding: "11px 16px", borderRadius: 12, marginBottom: 18,
              background: "rgba(255,80,80,0.12)", border: "1px solid rgba(255,80,80,0.35)",
              color: "#ffb0b0", fontSize: 13, fontWeight: 600
            }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="app-name">Full Name *</label>
                <input id="app-name" type="text" name="name"
                  placeholder="As per your certificate" autoComplete="name"
                  value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="app-email">Email Address *</label>
                <input id="app-email" type="email" name="email"
                  placeholder="your@email.com" autoComplete="email"
                  value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="app-phone">Phone Number *</label>
                <input id="app-phone" type="tel" name="phone"
                  placeholder="+91 XXXXX XXXXX" autoComplete="tel"
                  value={form.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="app-dob">Date of Birth *</label>
                <input id="app-dob" type="date" name="dob"
                  value={form.dob} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="app-course">Course Interested *</label>
                <select id="app-course" name="course" value={form.course} onChange={handleChange}>
                  <option value="">Select a course</option>
                  <option>B.E Computer Science &amp; Engineering</option>
                  <option>B.E Electronics &amp; Communication</option>
                  <option>B.E Mechanical Engineering</option>
                  <option>B.E Civil Engineering</option>
                  <option>B.E Information Technology</option>
                  <option>B.E Electrical Engineering</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="app-school">Previous College / School *</label>
                <input id="app-school" type="text" name="school"
                  placeholder="Name of your school"
                  value={form.school} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="app-pct">HSC / 12th Percentage *</label>
                <input id="app-pct" type="text" name="percentage"
                  placeholder="e.g. 92%"
                  value={form.percentage} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="app-city">City / State *</label>
                <input id="app-city" type="text" name="city"
                  placeholder="Your city and state" autoComplete="address-level2"
                  value={form.city} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group" style={{ marginTop: 4 }}>
              <label className="form-label" htmlFor="app-bio">Why do you want to join SECE? (Optional)</label>
              <textarea id="app-bio" name="bio"
                placeholder="Tell us about yourself and your goals..."
                value={form.bio} onChange={handleChange} />
            </div>

            <div className="actions">
              <button type="submit" disabled={loading}>
                {loading ? "Submitting…" : "🚀 Submit Application"}
              </button>
              <Link className="btn" to="/faq">❓ Need Help?</Link>
            </div>
          </form>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Application;
