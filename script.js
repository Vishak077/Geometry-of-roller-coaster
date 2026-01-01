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
const canvas = document.getElementById("coasterCanvas");
const ctx = canvas.getContext("2d");

function drawCurve() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(20, 100);

    for (let x = 20; x < 480; x++) {
        let y = 100 + 40 * Math.sin(x * 0.03);
        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = "#1e90ff";
    ctx.lineWidth = 3;
    ctx.stroke();
}

drawCurve();
const loopCanvas = document.getElementById("loopCanvas");
const lctx = loopCanvas.getContext("2d");
const slider = document.getElementById("radiusSlider");

function drawLoop(radius) {
    lctx.clearRect(0, 0, 200, 200);
    lctx.beginPath();
    lctx.arc(100, 100, radius, 0, Math.PI * 2);
    lctx.strokeStyle = "red";
    lctx.lineWidth = 3;
    lctx.stroke();
}

slider.addEventListener("input", () => {
    drawLoop(slider.value);
});

drawLoop(slider.value);
function calculateSpeed() {
    const h = document.getElementById("height").value;
    const g = 9.8;
    const speed = Math.sqrt(2 * g * h).toFixed(2);

    document.getElementById("speedResult").innerHTML =
        `Speed ≈ ${speed} m/s (using v = √2gh)`;
}
function checkAnswer(option) {
    const result = document.getElementById("quizResult");

    if (option === 2) {
        result.innerHTML = "✅ Correct! Geometry ensures rider safety.";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Try again!";
        result.style.color = "red";
    }
}

