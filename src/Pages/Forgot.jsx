import React from "react";
import "../Css/style.css";

function Forgot() {
  return (
    <div className="container">
      <h2>Forgot Password</h2>

      <input type="email" placeholder="Enter Email" />

      <button>Reset Password</button>
    </div>
  );
}

export default Forgot;