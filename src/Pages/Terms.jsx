import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../Css/style.css";

function Terms() {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="container anim anim-d1">
          <div className="badge badge-cyan" style={{ marginBottom: 14 }}>📜 Legal</div>
          <h2 className="page-title">Terms & Conditions</h2>
          <p className="lead" style={{ marginBottom: 24 }}>Last updated: January 2026. Please read these terms carefully before using CampusFlow.</p>

          {[
            { title: "✅ Acceptance of Terms", text: "By accessing or using CampusFlow, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the platform." },
            { title: "🎓 Student Eligibility", text: "CampusFlow is intended for use by enrolled or prospective students of Sri Eshwar College of Engineering, faculty members, and authorized administrators only." },
            { title: "🔑 Account Responsibility", text: "You are responsible for maintaining the confidentiality of your login credentials. Any activity that occurs under your account is your responsibility. Report unauthorized access immediately." },
            { title: "📋 Acceptable Use", text: "You agree not to misuse the platform, submit false information, attempt unauthorized access, or engage in any activity that disrupts the system's operation." },
            { title: "⚖️ Changes to Terms", text: "SECE reserves the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the new terms." },
            { title: "📩 Contact", text: "For questions about these terms, contact us at legal@campusflow.in or visit the Contact page." },
          ].map((s, i) => (
            <div className="content" key={i}>
              <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 8 }}>{s.title}</h3>
              <p className="lead" style={{ margin: 0, fontSize: 13.5 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Terms;
