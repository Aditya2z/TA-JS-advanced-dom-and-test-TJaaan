var canvas = document.querySelector("canvas");
let x = window.innerWidth / 2;
let y = window.innerHeight - 50;
let score = 0;

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Score: ${score}`, 8, 20);
}

function handleResize() {
  canvas.width = window.innerWidth - 20;
  canvas.height = window.innerHeight - 30;
  ball1.updateBall();
}

window.addEventListener("resize", handleResize);
window.addEventListener("DOMContentLoaded", handleResize);

var ctx = canvas.getContext("2d");

class Ball {
  constructor(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.initialX = x;
    this.initialY = y;
    this.initialDx = dx;
    this.initialDy = dy;
  }
  drawBall() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
  updateBall() {
    if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    } else if(this.y - this.radius < 0 ) {
      this.dy = -this.dy;
    } else if(this.x < paddle1.x + 100 
      && this.x > paddle1.x 
      && this.y + this.radius > canvas.height - 20 
      && this.y + this.radius < canvas.height ) {
      this.dy = -this.dy;
      this.y = canvas.height - 30;
    } else if(this.y > canvas.height) {
      alert("GAME OVER");
      this.resetBall();
      document.location.reload();
    }
    this.x += this.dx;
    this.y += this.dy;

    collisionDetection();
    this.drawBall();
  }
  resetBall() {
    this.x = this.initialX;
    this.y = this.initialY;
    this.dx = this.initialDx;
    this.dy = this.initialDy;
  }
}

class Paddle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  drawPaddle() {
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#0095DD";
    ctx.closePath();
  }
  updatePaddle(event) {
    if(event.key == "Right" || event.key == "ArrowRight") {
      if(this.x > window.innerWidth - this.width* 2 - 20) this.x = window.innerWidth - this.width*2 - 20;
      this.x += 100; 
    }
    else if(event.key == "Left" || event.key == "ArrowLeft") {
      if(this.x < this.width) this.x = this.width;
      this.x -= 100;
    }
  }
}


let ball1 = new Ball(x + 50, y - 20, 10, 2, 2);
let paddle1 = new Paddle(x, y, 100, 20);


// Bricks
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 125;
const brickHeight = 50;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 350;

const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}


// collison
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (ball1.x > b.x 
          && ball1.x < b.x + brickWidth 
          && ball1.y > b.y 
          && ball1.y < b.y + brickHeight){
          ball1.dy = -ball1.dy;
          b.status = 0;
          score++;
        }

        if (score === brickRowCount * brickColumnCount) {
          alert("YOU WIN, CONGRATULATIONS!");
          document.location.reload();
        }
      }
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth - 20, innerHeight - 30);

  ball1.updateBall();
  paddle1.drawPaddle();
  drawBricks();
  drawScore();
}
animate();

document.addEventListener("keyup", paddle1.updatePaddle.bind(paddle1));

