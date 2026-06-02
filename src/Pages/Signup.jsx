import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../Css/style.css";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm]       = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setError("");
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password, confirm } = form;
    if (!name || !email || !password || !confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    // Simulate async signup (replace with real API call)
    setTimeout(() => {
      setLoading(false);
      alert(`🎉 Account created for ${email}!`);
      navigate("/login");
    }, 1000);
  }

  return (
    <>
      <Navbar />
      <div className="page">
        <div className="container anim anim-d1" style={{ maxWidth: 520 }}>

          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 20, margin: "0 auto 16px",
              background: "linear-gradient(135deg,#ff6bcb,#f7971e)",
              display: "grid", placeItems: "center", fontSize: 28,
              boxShadow: "0 0 32px rgba(255,107,203,0.4)"
            }}>🎓</div>
            <h2 className="page-title" style={{ textAlign: "center" }}>Create Account</h2>
            <p className="lead" style={{ marginTop: 6 }}>Register as a student to apply for college programs.</p>
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
                <label className="form-label" htmlFor="signup-name">Full Name</label>
                <input
                  id="signup-name" type="text" name="name"
                  placeholder="Your full name" autoComplete="name"
                  value={form.name} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="signup-email">Email Address</label>
                <input
                  id="signup-email" type="email" name="email"
                  placeholder="student@sece.ac.in" autoComplete="email"
                  value={form.email} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="signup-password">Password</label>
                <input
                  id="signup-password" type="password" name="password"
                  placeholder="Min. 6 characters" autoComplete="new-password"
                  value={form.password} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="signup-confirm">Confirm Password</label>
                <input
                  id="signup-confirm" type="password" name="confirm"
                  placeholder="Repeat password" autoComplete="new-password"
                  value={form.confirm} onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%", padding: "14px", marginTop: 8,
                background: "linear-gradient(135deg,#ff6bcb,#f7971e)",
                boxShadow: "0 8px 24px rgba(255,107,203,0.4)"
              }}
            >
              {loading ? "Creating account…" : "🎉 Create Account"}
            </button>
          </form>

          <div className="divider" />

          <p style={{ textAlign: "center", fontSize: 13, color: "var(--muted)" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#6c63ff", fontWeight: 700, textDecoration: "none" }}>
              Sign in →
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
