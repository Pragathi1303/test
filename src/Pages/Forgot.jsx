import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../Css/style.css";

function Forgot() {
  const [email, setEmail]     = useState("");
  const [error, setError]     = useState("");
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setError("");
    setLoading(true);
    // Simulate sending reset link (replace with real API call)
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  }

  return (
    <>
      <Navbar />
      <div className="page">
        <div className="container anim anim-d1" style={{ maxWidth: 480 }}>

          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 20, margin: "0 auto 16px",
              background: "linear-gradient(135deg,#43e97b,#0ba360)",
              display: "grid", placeItems: "center", fontSize: 28,
              boxShadow: "0 0 32px rgba(67,233,123,0.4)"
            }}>🔓</div>
            <h2 className="page-title" style={{ textAlign: "center" }}>Reset Password</h2>
            <p className="lead" style={{ marginTop: 6 }}>Enter your registered email and we'll send you a reset link.</p>
          </div>

          {/* Success state */}
          {sent ? (
            <div style={{
              padding: "20px", borderRadius: 14, textAlign: "center",
              background: "linear-gradient(135deg,rgba(67,233,123,0.15),rgba(67,233,123,0.05))",
              border: "1px solid rgba(67,233,123,0.35)"
            }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>📧</div>
              <p style={{ color: "#9effc5", fontWeight: 700, marginBottom: 6 }}>Reset link sent!</p>
              <p style={{ color: "var(--muted)", fontSize: 13 }}>
                Check your inbox at <strong style={{ color: "#fff" }}>{email}</strong>
              </p>
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
                <div className="form-group">
                  <label className="form-label" htmlFor="forgot-email">Email Address</label>
                  <input
                    id="forgot-email" type="email" name="email"
                    placeholder="student@sece.ac.in" autoComplete="email"
                    value={email}
                    onChange={e => { setError(""); setEmail(e.target.value); }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%", padding: "14px",
                    background: "linear-gradient(135deg,#43e97b,#0ba360)",
                    boxShadow: "0 8px 24px rgba(67,233,123,0.4)"
                  }}
                >
                  {loading ? "Sending…" : "📧 Send Reset Link"}
                </button>
              </form>
            </>
          )}

          <div className="divider" />

          <p style={{ textAlign: "center", fontSize: 13, color: "var(--muted)" }}>
            Remember your password?{" "}
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

export default Forgot;
