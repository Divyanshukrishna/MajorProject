import React from 'react';

const About = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 boxes per row
    gap: "20px",
    padding: "20px",
  };

  const boxStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    
    // 🔥 Force equal height for all boxes
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",

    // 🔥 Makes every box exactly same height
    height: "250px",
  };

  const headingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "black",
  };

  const textStyle = {
    fontSize: "14px",
    color: "black",
    lineHeight: "1.5",
  };

  return (
    <div style={containerStyle}>
      
      <div style={boxStyle}>
        <h3 style={headingStyle}>Input Image / Video</h3>
        <p style={textStyle}>
          The system receives raw images or video frames from surveillance cameras or datasets.
        </p>
      </div>

      <div style={boxStyle}>
        <h3 style={headingStyle}>Preprocessing & Blur Handling</h3>
        <p style={textStyle}>
          Apply preprocessing techniques such as deblurring, noise reduction, and contrast enhancement.
        </p>
      </div>

      <div style={boxStyle}>
        <h3 style={headingStyle}>License Plate Detection</h3>
        <p style={textStyle}>
          Deep learning models like YOLOv5 or YOLOv8 detect and localize license plates.
        </p>
      </div>

      <div style={boxStyle}>
        <h3 style={headingStyle}>License Plate Extraction</h3>
        <p style={textStyle}>
          The detected plate region is cropped for further processing.
        </p>
      </div>

      <div style={boxStyle}>
        <h3 style={headingStyle}>Character Recognition (OCR)</h3>
        <p style={textStyle}>
          OCR engines like EasyOCR, Tesseract, or PaddleOCR extract characters from the plate.
        </p>
      </div>

      <div style={boxStyle}>
        <h3 style={headingStyle}>Output & Visualization</h3>
        <p style={textStyle}>
          The recognized number is displayed and can be saved or overlayed on the original image.
        </p>
      </div>

    </div>
  );
};

export default About;
