import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../Css/style.css";

function Privacy() {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="container anim anim-d1">
          <div className="badge badge-purple" style={{ marginBottom: 14 }}>🔒 Legal</div>
          <h2 className="page-title">Privacy Policy</h2>
          <p className="lead" style={{ marginBottom: 24 }}>Last updated: January 2026. Your privacy is important to us.</p>

          {[
            { title: "📋 Information We Collect", text: "We collect personal information such as your name, email address, phone number, and academic records when you register or submit an application through CampusFlow." },
            { title: "🔐 How We Use Your Data", text: "Your information is used solely for college management purposes — processing applications, communicating updates, managing student records, and improving our platform." },
            { title: "🚫 Data Sharing", text: "We do not sell, trade, or rent your personal information to third parties. Data may be shared with relevant college departments only as required for academic administration." },
            { title: "🍪 Cookies", text: "CampusFlow uses cookies to maintain your session and improve your experience. You can disable cookies in your browser settings, though some features may not work as expected." },
            { title: "📩 Contact About Privacy", text: "If you have any questions about how we handle your data, please contact us at privacy@campusflow.in or visit the Contact page." },
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

export default Privacy;
