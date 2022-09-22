const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let size = 20;
let color = "black";
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
}
// function clickToDraw(e) {
//   const rect = canvas.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;
//   drawCircle(x, y);
//   console.log(x, y);
// }

// canvas.addEventListener("mousedown", clickToDraw);
