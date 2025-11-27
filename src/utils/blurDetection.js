export function computeBlurScore(imageData) {
  const { data, width, height } = imageData;
  const gray = new Float32Array(width * height);

  // convert to grayscale
  for (let i = 0; i < width * height; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    gray[i] = 0.299 * r + 0.587 * g + 0.114 * b;
  }

  // simple Laplacian-like filter to measure sharpness
  let sum = 0;
  let sumSq = 0;
  let count = 0;

  const kernel = [0, -1, 0,
                 -1,  4, -1,
                  0, -1, 0];

  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      let response = 0;
      let k = 0;
      for (let ky = -1; ky <= 1; ky++) {
        for (let kx = -1; kx <= 1; kx++) {
          const ix = x + kx;
          const iy = y + ky;
          response += gray[iy * width + ix] * kernel[k++];
        }
      }
      sum += response;
      sumSq += response * response;
      count++;
    }
  }

  const mean = sum / count;
  const variance = sumSq / count - mean * mean;

  // map variance to 0-100 for UI
  const normalized = Math.max(0, Math.min(100, Math.log10(1 + variance) * 25));
  return { variance, score: normalized };
}
