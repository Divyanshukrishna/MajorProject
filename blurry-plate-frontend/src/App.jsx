import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // If user is on login or signup page, do NOT show navbar/hero section
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* Contact Page */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "20px",
          flexWrap: "wrap", 
        }}
        >
          <About />
        <div style={{ flex: "1 1 22%", margin: "0 10px" }}>
          <Contact name="Kshitiz Chauhan"  profile="Full Stack Developer"  linkedinFollower="40k"  instagramFollower="50"  facebookFollwer="40k"  />
        </div>
        <div style={{ flex: "1 1 22%", margin: "0 10px" }}>
          <Contact name="Aman Dixit"  profile="Frontend Developer"  linkedinFollower="40k"  instagramFollower="50k"  facebookFollwer="40k" />
        </div>
        <div style={{ flex: "1 1 22%", margin: "0 10px" }}>
          <Contact name="Divyanshu Krishna"  profile="Full Stack Developer"  linkedinFollower="40k"  instagramFollower="50k"  facebookFollwer="40k" />
        </div>
        <div style={{ flex: "1 1 22%", margin: "0 10px" }}>
          <Contact name="Dev Gupta"  profile="ML Engineer"  linkedinFollower="40k"  instagramFollower="50k"  facebookFollwer="40k" />
        </div>
      </div>
    </>
  );
}

export default App;

