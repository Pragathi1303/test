import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { apiPost } from "../api";
import "../Css/style.css";

function Login() {
  const navigate = useNavigate();
  const [form,    setForm]    = useState({ email: "", password: "" });
  const [error,   setError]   = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setError("");
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.password) { setError("Please fill in all fields."); return; }
    setLoading(true);
    try {
      const data = await apiPost("/api/auth/login", form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="page">
        <div className="container anim anim-d1" style={{ maxWidth: 480 }}>

          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 20, margin: "0 auto 16px",
              background: "linear-gradient(135deg,#6c63ff,#00d4ff)",
              display: "grid", placeItems: "center", fontSize: 28,
              boxShadow: "0 0 32px rgba(108,99,255,0.5)"
            }}>🔑</div>
            <h2 className="page-title" style={{ textAlign: "center" }}>Student Login</h2>
            <p className="lead" style={{ marginTop: 6 }}>Access your academic portal and applications.</p>
          </div>

          {error && (
            <div style={{
              padding: "11px 16px", borderRadius: 12, marginBottom: 18,
              background: "rgba(255,80,80,0.12)", border: "1px solid rgba(255,80,80,0.35)",
              color: "#ffb0b0", fontSize: 13, fontWeight: 600
            }}>⚠️ {error}</div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor="login-email">Email Address</label>
              <input id="login-email" type="email" name="email"
                placeholder="student@sece.ac.in" autoComplete="email"
                value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="login-password">Password</label>
              <input id="login-password" type="password" name="password"
                placeholder="Enter your password" autoComplete="current-password"
                value={form.password} onChange={handleChange} />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
              <Link to="/forgot" style={{ fontSize: 13, color: "#00d4ff", textDecoration: "none" }}>
                Forgot password?
              </Link>
            </div>
            <button type="submit" style={{ width: "100%", padding: "14px" }} disabled={loading}>
              {loading ? "Signing in…" : "🚀 Sign In"}
            </button>
          </form>

          <div className="divider" />
          <p style={{ textAlign: "center", fontSize: 13, color: "var(--muted)" }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#6c63ff", fontWeight: 700, textDecoration: "none" }}>
              Create one →
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
