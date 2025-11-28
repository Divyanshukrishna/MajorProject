import React from 'react';

const Contact = ({ name, profile, linkedinFollower, instagramFollower, facebookFollwer }) => {
  return (
    <div
      style={{
        fontFamily: "'Courier New', Courier, monospace",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "300px",
          width: "100%",
          background: "#fff",
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
          padding: "25px",
          borderRadius: "24px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "24px 24px 0px 0px",
            height: "150px",
            width: "100%",
            backgroundColor: "#4070f4",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            backgroundColor: "#4070f4",
            padding: "3px",
            marginBottom: "10px",
          }}
        >
          <img
            src="divyanshu.jpg"
            alt=""
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              border: "2px solid #fff",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#333" }}>
          <span style={{ fontSize: "25px", fontWeight: 500 }}>{name}</span>
          <span style={{ fontSize: "14px", fontWeight: 500 }}>{profile}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
          <a style={socialIcon("#4267b2")}><i className="bx bxl-facebook"></i></a>
          <a style={socialIcon("#1da1f2")}><i className="bx bxl-twitter"></i></a>
          <a style={socialIcon("#ff0000")}><i className="bx bxl-youtube"></i></a>
          <a style={socialIcon("#e1306c")}><i className="bx bxl-instagram"></i></a>
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: "25px" }}>
          <button style={btnStyle}>Projects</button>
          <button style={btnStyle}>Message</button>
        </div>

        {/* <div style={{ display: "flex", alignItems: "center", marginTop: "25px" }}>
          <div style={statsBox}><i className="bx bx-heart"></i> {linkedinFollower}</div>
          <div style={statsBox}><i className="bx bx-message-rounded"></i> {instagramFollower}</div>
          <div style={statsBox}><i className="bx bx-share"></i> {facebookFollwer}</div>
        </div> */}
      </div>
    </div>
  );
};

const socialIcon = (bg) => ({
  margin: "0 8px",
  height: "34px",
  width: "34px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  backgroundColor: bg,
});

const btnStyle = {
  color: "#fff",
  fontSize: "14px",
  backgroundColor: "#4070f4",
  border: "none",
  borderRadius: "24px",
  margin: "0 10px",
  padding: "8px 24px",
};

const statsBox = {
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
  borderRight: "2px solid #e7e7e7",
};

export default Contact;
