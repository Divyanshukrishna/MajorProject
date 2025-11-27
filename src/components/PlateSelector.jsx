import React, { useRef, useState, useEffect } from "react";

function PlateSelector({ image, autoRect, onRegionSelected }) {
  const canvasRef = useRef(null);
  const [rect, setRect] = useState(null);
  const [drawing, setDrawing] = useState(false);
  const [start, setStart] = useState(null);

  useEffect(() => {
    if (!image || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);

    const activeRect = rect || autoRect;

    if (activeRect) {
      ctx.strokeStyle = "yellow";
      ctx.lineWidth = 3;
      ctx.strokeRect(activeRect.x, activeRect.y, activeRect.w, activeRect.h);
    }
  }, [image, rect, autoRect]);

  // same mouse drawing code as before...
  // (keep your previous handlers here, unchanged)

  return (
    <div className="selector">
      {image && (
        <canvas
          ref={canvasRef}
          onMouseDown={(e) => {
            setRect(null);
            setStart(null);
            // your previous logic
          }}
          onMouseMove={(e) => {}}
          onMouseUp={(e) => {}}
          style={{ border: "1px solid #ccc", maxWidth: "100%", cursor: "crosshair" }}
        />
      )}

      {!image && <p>Please upload an image.</p>}
    </div>
  );
}

export default PlateSelector;
