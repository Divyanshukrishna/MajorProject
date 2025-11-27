import React from "react";
import { Link } from "react-router-dom";

const preventRefresh = (e) => {
  e.preventDefault();
};

export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "49px 92px",
          width: "370px",
          borderRadius: "16px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          animation: "fadeIn 0.5s ease-in-out",
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "25px",
            color: "#1a237e",
          }}
        >
          LOGIN
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

          {/* Button */}
          <button
            type="submit"
            onClick={preventRefresh}
            style={{
              width: "100%",
              height: "45px",
              background: "#1976d2",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              marginTop: "10px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Submit
          </button>
        </form>

        {/* Footer */}
        <p
          style={{
            marginTop: "14px",
            fontSize: "0.9rem",
            textAlign: "center",
            color:'black',
          }}
        >
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#1565c0", fontWeight: 600 }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
