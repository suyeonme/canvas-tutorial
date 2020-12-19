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

// (3) Arc (Circle)
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
