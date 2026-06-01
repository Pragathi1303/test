import React from "react";
import "../Css/style.css";

function Signup() {
  return (
    <div className="container">
      <h2>Signup</h2>

      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Signup</button>
    </div>
  );
}

export default Signup;