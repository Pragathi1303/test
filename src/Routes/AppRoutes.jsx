import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Forgot from "../Pages/Forgot";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import FAQ from "../Pages/FAQ";
import Privacy from "../Pages/Privacy";
import Terms from "../Pages/Terms";
import Admin from "../Pages/Admin";
import Application from "../Pages/Application";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;