import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../Css/style.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Home Page</h1>
        <p>Welcome to React Website</p>
      </div>

      <Footer />
    </>
  );
}

export default Home;