const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw parabola
ctx.beginPath();
for (let x = -10; x <= 10; x += 0.1) {
  let y = x * x;
  let drawX = 250 + x * 20;
  let drawY = 250 - y * 2;
  ctx.lineTo(drawX, drawY);
}
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();
