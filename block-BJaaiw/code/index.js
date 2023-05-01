var canvas = document.querySelector("canvas");
let x = 100;
let y = 100;

function handleResize() {
  canvas.width = window.innerWidth - 20;
  canvas.height = window.innerHeight - 30;
  drawBall();
}

window.addEventListener("resize", handleResize);
window.addEventListener("DOMContentLoaded", handleResize);

var ctx = canvas.getContext("2d");

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}


