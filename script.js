const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

/* Basic Methods
fillRect()
ctx.fillStyle = 'green';
ctx.fillRect(20, 20, 100, 100);

// strokeRect()
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.strokeRect(100, 200, 100, 150);

// clearRect()
ctx.clearRect(30 , 15, 90, 90);

// fillText()
ctx.font = '30px Arial';
ctx.fillStyle = 'purple';
ctx.fillText('Hello World', 300, 50);

// strokeText()
ctx.lineWidth = 1;
ctx.strokeStyle = 'orange';
ctx.strokeText('Hello World', 300, 100);
*/

/* Paths
// (1) Triangle - 1
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
ctx.closePath();
ctx.fillStyle = 'coral';
ctx.fill();

// (1) Triangle - 2
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(150, 200);
ctx.lineTo(250, 200);
ctx.closePath();
ctx.stroke();

// (2) Rectangle
ctx.beginPath();
ctx.rect(300, 50, 100, 100);
ctx.fillStyle = 'teal';
ctx.fill();
*/

/* (3) Arc (Circle)
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
ctx.beginPath();

// Draw Head
ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

// Move to Mouth
ctx.moveTo(centerX + 100, centerY);

// Draw mouth
ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// Move  left eye
ctx.moveTo(centerX - 60, centerY - 80);

// Draw left eye
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// Move  right eye
ctx.moveTo(centerX + 100, centerY - 80);

// Draw right eye
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

ctx.stroke();
*/

/* Animation 1
const circle = {
  x: 200,
  y: 200,
  size: 30,
  dx: 5,
  dy: 4,
};

const drawCircle = () => {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, 30, 0, Math.PI * 2);
  ctx.fillStyle = 'coral';
  ctx.fill();
};

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();

  // Change position
  circle.x += circle.dx;
  circle.y += circle.dy;

  // Detect side walls
  if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
    circle.dx *= -1;
  }

  // Detect top and bottom walls
  if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
    circle.dy *= -1;
  }

  // Repaint canvas
  requestAnimationFrame(update);
};

update();
*/

// Animation 2 - Character
const img = document.getElementById('source');
const player = {
  w: 50,
  h: 70,
  x: 20,
  y: 200,
  speed: 10,
  dx: 0,
  dy: 0,
};

const clear = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const drawPlayer = () => {
  ctx.drawImage(img, player.x, player.y, player.w, player.h);
};

const detectWalls = () => {
  // Left wall
  if (player.x < 0) {
    player.x = 0;
  }
  // Right Wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }
  // Top wall
  if (player.y < 0) {
    player.y = 0;
  }
  // Bottom Wall
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
};

const newPos = () => {
  player.x += player.dx;
  player.y += player.dy;
  detectWalls();
};

const update = () => {
  clear();
  drawPlayer();
  newPos();
  requestAnimationFrame(update);
};

const moveRight = () => (player.dx = player.speed);
const moveLeft = () => (player.dx = -player.speed);
const moveUp = () => (player.dy = -player.speed);
const moveDown = () => (player.dy = player.speed);

const keyDown = e => {
  if (e.key === 'ArrowRight' || e.key === 'Right') {
    moveRight();
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    moveLeft();
  } else if (e.key === 'ArrowUp' || e.key === 'Up') {
    moveUp();
  } else if (e.key === 'ArrowDown' || e.key === 'Down') {
    moveDown();
  }
};

const keyUp = e => {
  if (
    e.key === 'ArrowRight' ||
    e.key === 'Right' ||
    e.key === 'ArrowLeft' ||
    e.key === 'Left' ||
    e.key === 'ArrowUp' ||
    e.key === 'Up' ||
    e.key === 'ArrowDown' ||
    e.key === 'Down'
  ) {
    player.dx = 0;
    player.dy = 0;
  }
};

update();
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
