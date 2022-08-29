var c1posX= 80
var c1posY= 80

var l1posX = 0
var l1posY = 400

var l2posX = 100
var l2posY = 400

var l3posX = 200
var l3posY = 400
var speed = 0.60
var animate = true

function animateboi() {
  const ctx2 = document.getElementById('canvas').getContext('2d');
  // clear old frame;
  ctx2.clearRect(0, 0, 400, 400); // clear canvas
  if(animate) {
    moveCircle()
    moveLines()
  }

  drawCircle(ctx2);
  drawLine(l1posX, l1posY, "seagreen", ctx2)
  drawLine(l2posX, l2posY, "#000000", ctx2)
  drawLine(l3posX, l3posY, "seagreen", ctx2)

  if(animate) {
    requestAnimationFrame(animateboi);
  }
}

function startCanvasAnimation() {
  animate = true
  animateboi()
}

function stopCanvasAnimation() {
  animate = false
}


function drawCircle(ctx) {
  ctx.beginPath();
  ctx.arc(c1posX, c1posY, 34.5, 0, 2 * Math.PI);
  ctx.strokeStyle = "#FFFFFF";
  ctx.fillStyle = 'darkgreen';
  ctx.fill();
  ctx.stroke();
}

function drawLine(toX, toY, color, ctx) {
  ctx.beginPath();
  ctx.moveTo(80,80)
  ctx.lineTo(toX,toY)
  ctx.lineWidth = 10;
  ctx.strokeStyle = color;
  ctx.stroke();
}

function moveCircle() {
  c1posY += speed;
  c1posX = (c1posY/400) * 20 + 80
  if (c1posY > 400) {
    c1posY = 80
    c1posX = 80
  }
}

function moveLines() {
  l1posY -= speed*1.25;  // Ends up at 0
  l1posX = (400-l1posY)/400 * 400;  // Ends up at 400

  if (l1posY < 1) {
   l1posX = 0
   l1posY = 400
  }

  l3posX -= speed*0.62;  // Ends up at 0
  l3posY = 400 - (200-l3posX)/200*400;  // Ends up at 0
  if (l3posX < 1) {
    l3posX = 200
    l3posY = 400
  }
}
