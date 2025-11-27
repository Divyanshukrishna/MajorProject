import React from 'react';
import { Link } from 'react-router-dom';
import ImageUploader from './ImageUploader';

const Navbar = ({ onImageLoad }) => {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          backgroundColor: '#f8f9fa',
          borderBottom: '1px solid #ddd',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', cursor: 'pointer' }}>
          Logo
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
            Home
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>
            About
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>
            Contact
          </Link>
          <Link to="/help" style={{ textDecoration: 'none', color: '#333' }}>
            Help
          </Link>
        </div>
        <Link
          to="/login"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          Sign Up/Login
        </Link>
      </nav>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '2rem 4.5rem 1rem 4.5rem',
        }}
        >
        {/* Left Block */}
        <div
            style={{
              maxWidth: "50%",
              paddingRight: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around"
            }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
            Accurate License Plate Recognition Software
          </h1>

          <h2 style={{ fontSize: "1.2rem", color: "#ccc", marginBottom: "1.5rem" }}>
            License Plate Recognition software that works in all environments, optimized for your location.
          </h2>

            <a
              href="/login"
              style={{
                padding: "1.2rem 2rem",
                width:'12%',
                fontSize: "1rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                textDecoration: "none",
                marginTop: "0px",
                textWrap:'nowrap',
              }}
            >
              Get Started
            </a>
        </div>

        {/* Right Block */}
        <div
          style={{
            width: '30%',
            flex: 'center',
            padding: '1.5rem',
            border: '2px dashed #ccc',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <div style={{textAlign:'center', height : '100%', marginTop:'80px' }}>
            <p style={{ color: '#ccc', marginBottom: '1rem', margin: '3.3rem 0rem 0rem 0rem' }}>
              Upload Your Blurry Image
            </p>
            <ImageUploader onImageLoad={onImageLoad} />

          </div>
        </div>
      </div>

      {/* Three Block  */}
        <div style={{justifyContent:'space-around' , display:'flex', height:'250px',marginTop:'10px'}}>
          <div style={{width:'30%', height:'80%', border:'2px solid red',}}>1st</div>
          <div style={{width:'30%', height:'80%', border:'2px solid red',}}>2nd</div>
          <div style={{width:'30%', height:'80%', border:'2px solid red',}}>3rd</div>
        </div>

    </>
  );
};

export default Navbar;
