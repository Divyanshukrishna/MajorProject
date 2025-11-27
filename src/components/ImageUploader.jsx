import React from "react";

function ImageUploader({ onImageLoad }) {
  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      onImageLoad(img, url);
    };
    img.src = url;
  };

  return (
    <div className="uploader">
      <label className="btn">
        Upload  
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </label>
    </div>
  );
}

export default ImageUploader;
