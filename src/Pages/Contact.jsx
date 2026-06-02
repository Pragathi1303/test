import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../Css/style.css";

const EMPTY = { name: "", email: "", phone: "", subject: "Admissions Inquiry", message: "" };

function Contact() {
  const [form, setForm]         = useState(EMPTY);
  const [error, setError]       = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  function handleChange(e) {
    setError("");
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Name, email, and message are required.");
      return;
    }
    setLoading(true);
    // Simulate sending message (replace with real API call)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <>
      <Navbar />
      <div className="page">

        <div style={{ textAlign: "center", padding: "32px 0 24px" }} className="anim anim-d1">
          <div className="badge badge-cyan" style={{ marginBottom: 12 }}>📬 Get In Touch</div>
          <h1 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -1, marginBottom: 10 }}>Contact Us</h1>
          <p style={{ color: "var(--muted)", fontSize: 14 }}>We're here to help. Reach out and we'll respond within 24 hours.</p>
        </div>

        {/* Info Cards */}
        <div className="grid-3 anim anim-d2" style={{ marginBottom: 28 }}>
          <div className="feature-card" style={{ textAlign: "center" }}>
            <div className="feature-icon fi-purple" style={{ margin: "0 auto 14px" }}>📍</div>
            <h3>Address</h3>
            <p>Kondampatti, Kinathukadavu, Coimbatore – 641202, Tamil Nadu.</p>
          </div>
          <div className="feature-card" style={{ textAlign: "center" }}>
            <div className="feature-icon fi-cyan" style={{ margin: "0 auto 14px" }}>📞</div>
            <h3>Phone</h3>
            <p>+91 422 267 3000<br />Mon – Sat, 9am – 5pm</p>
          </div>
          <div className="feature-card" style={{ textAlign: "center" }}>
            <div className="feature-icon fi-pink" style={{ margin: "0 auto 14px" }}>✉️</div>
            <h3>Email</h3>
            <p>admissions@sece.ac.in<br />support@campusflow.in</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="container anim anim-d3" style={{ marginTop: 0 }}>
          <h2 className="page-title">Send a Message</h2>
          <p className="lead" style={{ marginBottom: 24 }}>Fill in the form below and our team will get back to you.</p>

          {/* Success state */}
          {submitted ? (
            <div style={{
              padding: "28px", borderRadius: 16, textAlign: "center",
              background: "linear-gradient(135deg,rgba(67,233,123,0.15),rgba(67,233,123,0.05))",
              border: "1px solid rgba(67,233,123,0.35)"
            }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>📨</div>
              <p style={{ color: "#9effc5", fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Message sent!</p>
              <p style={{ color: "var(--muted)", fontSize: 13, marginBottom: 16 }}>
                Thanks <strong style={{ color: "#fff" }}>{form.name}</strong>! We'll reply to{" "}
                <strong style={{ color: "#00d4ff" }}>{form.email}</strong> within 24 hours.
              </p>
              <button onClick={() => { setForm(EMPTY); setSubmitted(false); }}
                style={{ padding: "10px 24px", fontSize: 13 }}>
                ✉️ Send Another
              </button>
            </div>
          ) : (
            <>
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
                    <label className="form-label" htmlFor="contact-name">Your Name *</label>
                    <input id="contact-name" type="text" name="name"
                      placeholder="Full name" autoComplete="name"
                      value={form.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email Address *</label>
                    <input id="contact-email" type="email" name="email"
                      placeholder="your@email.com" autoComplete="email"
                      value={form.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">Phone (Optional)</label>
                    <input id="contact-phone" type="tel" name="phone"
                      placeholder="+91 XXXXX XXXXX" autoComplete="tel"
                      value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">Subject</label>
                    <select id="contact-subject" name="subject" value={form.subject} onChange={handleChange}>
                      <option>Admissions Inquiry</option>
                      <option>Technical Support</option>
                      <option>Fee Structure</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: 4 }}>
                  <label className="form-label" htmlFor="contact-message">Message *</label>
                  <textarea id="contact-message" name="message"
                    placeholder="Write your message here..."
                    value={form.message} onChange={handleChange} />
                </div>

                <div className="actions">
                  <button type="submit" disabled={loading}>
                    {loading ? "Sending…" : "📨 Send Message"}
                  </button>
                  <Link className="btn" to="/faq">View FAQ →</Link>
                </div>
              </form>
            </>
          )}
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Contact;
