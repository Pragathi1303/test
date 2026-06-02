import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../Css/style.css";

const faqs = [
  { q: "How do I apply for admission?", a: "Go to the Apply page, fill in the application form with your personal and academic details, select your preferred course, and click Submit Application." },
  { q: "How do I log into the student portal?", a: "Visit the Login page and enter your registered email and password. If you're new, create an account first via the Signup page." },
  { q: "How do I reset my password?", a: "Click 'Forgot Password' on the login page or go directly to the Reset Password page. Enter your email and we'll send you a reset link." },
  { q: "What courses are available at SECE?", a: "SECE offers B.E programs in Computer Science, Electronics, Mechanical, Civil, Information Technology, and Electrical Engineering." },
  { q: "How can I check my application status?", a: "Log in to your student portal and navigate to the Applications section. Your current status will be shown as Pending, Under Review, Approved, or Rejected." },
  { q: "Who do I contact for technical support?", a: "Email support@campusflow.in or visit the Contact page to send a message. Our team responds within 24 hours on working days." },
];

function FAQ() {
  return (
    <>
      <Navbar />
      <div className="page">

        <div style={{ textAlign: "center", padding: "32px 0 28px" }} className="anim anim-d1">
          <div className="badge badge-amber" style={{ marginBottom: 12 }}>❓ Help Center</div>
          <h1 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -1, marginBottom: 10 }}>Frequently Asked Questions</h1>
          <p style={{ color: "var(--muted)", fontSize: 14 }}>Quick answers to common questions about CampusFlow and SECE.</p>
        </div>

        <div style={{ maxWidth: 760, margin: "0 auto" }} className="anim anim-d2">
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <div className="faq-q">{f.q}</div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }} className="anim anim-d3">
          <p style={{ color: "var(--muted)", marginBottom: 16, fontSize: 14 }}>Still have questions?</p>
          <Link className="btn primary" to="/contact">📬 Contact Us</Link>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default FAQ;
