/*import katex from "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.mjs";

export function funcAfimPts(x1, y1, x2, y2, div) {
  let a = (y2 - y1) / (x2 - x1);
  let b = y1 - a * x1;
  
  let solution = `
  P(${x1}, ${y2}) Q(${x2}, ${y2})
  \\newline
  \\newline
  \\frac{${y2}-${y1}}{${x2}-${x1}}
  `;
  
  return katex.render(solution, div, { 
    displayMode: true 
  });
}*/