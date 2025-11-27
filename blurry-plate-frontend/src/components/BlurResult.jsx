import React from "react";

function interpretScore(score) {
  if (score > 60) return "Plate is clear (good quality).";
  if (score > 30) return "Plate is slightly blurry (may be readable).";
  return "Plate is very blurry (hard to identify).";
}

function BlurResult({ score, variance }) {
  if (score == null) return null;

  return (
    <div className="result">
      <h3>Blurry Plate Analysis</h3>
      <p>Sharpness score: {score.toFixed(1)} / 100</p>
      <p>Variance metric: {variance.toFixed(2)}</p>
      <p>{interpretScore(score)}</p>
    </div>
  );
}

export default BlurResult;
