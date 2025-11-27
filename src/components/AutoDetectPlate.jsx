import React, { useState } from "react";

export default function AutoDetectPlate() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [blurInfo, setBlurInfo] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setBlurInfo(null);
    }
  };

  const handleAutoDetect = async () => {
    if (!image) return;
    setProcessing(true);

    // Simulated blur detection
    setTimeout(() => {
      setBlurInfo({
        message: "Blur detected on the license plate region.",
        area: { x: 120, y: 80, width: 140, height: 60 },
      });
      setProcessing(false);
    }, 1500);
  };

  return (
    <div className="p-6 flex flex-col gap-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold">License Plate Blur Auto-Detection</h2>

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="border p-2 rounded"
      />

      {/* Preview */}
      {preview && (
        <div className="relative mt-4">
          <img src={preview} alt="Uploaded" className="rounded shadow" />

          {/* Draw blur area overlay if detected */}
          {blurInfo && (
            <div
              className="absolute border-4 border-red-500"
              style={{
                top: blurInfo.area.y,
                left: blurInfo.area.x,
                width: blurInfo.area.width,
                height: blurInfo.area.height,
              }}
            ></div>
          )}
        </div>
      )}

      {/* Auto Detect Button */}
      {preview && (
        <button
          onClick={handleAutoDetect}
          disabled={processing}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-2 shadow"
        >
          {processing ? "Detecting..." : "Auto Detect Blur"}
        </button>
      )}

      {/* Result */}
      {blurInfo && (
        <p className="text-green-700 font-semibold mt-2">{blurInfo.message}</p>
      )}
    </div>
  );
}
