import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "40px 70px",
          width: "370px",
          borderRadius: "16px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: "26px",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "25px",
            color: "#1a237e",
          }}
        >
          CREATE AN ACCOUNT
        </div>

        <form>
          {/* Name */}
          <label
            htmlFor="name"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#0d47a1",
            }}
          >
            Name
          </label>

          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            style={{
              width: "94%",
              height: "45px",
              padding: "0px",
              paddingLeft:'10px',
              border: "2px solid #bbdefb",
              background: "#f4faff",
              borderRadius: "8px",
              marginBottom: "18px",
              transition: "0.3s",
            }}
          />

          {/* Email */}
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#0d47a1",
            }}
          >
            E-Mail
          </label>

          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            style={{
              width: "94%",
              height: "45px",
              padding: "0px",
              paddingLeft:'10px',
              border: "2px solid #bbdefb",
              background: "#f4faff",
              borderRadius: "8px",
              marginBottom: "18px",
              transition: "0.3s",
            }}
          />

          {/* Password */}
          <label
            htmlFor="password"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#0d47a1",
            }}
          >
            Password
          </label>

          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            style={{
              width: "94%",
              height: "45px",
              padding: "0px",
              paddingLeft:'10px',
              border: "2px solid #bbdefb",
              background: "#f4faff",
              borderRadius: "8px",
              marginBottom: "18px",
              transition: "0.3s",
            }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              height: "45px",
              background: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "5px",
            }}
          >
            Submit
          </button>

          {/* OR */}
          <h3
            style={{
              textAlign: "center",
              margin: "18px 0 12px 0",
              color: "#62727b",
              fontSize: "16px",
            }}
          >
            OR
          </h3>
        </form>

        {/* Footer */}
        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontSize: "0.9rem",
            color:'black',
          }}
        >
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#1565c0", fontWeight: 600 }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
