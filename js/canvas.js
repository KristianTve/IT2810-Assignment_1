var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// Circle
ctx.beginPath();
ctx.arc(80, 80, 30, 0, 2 * Math.PI, );
ctx.strokeStyle = "#FFFFFF";
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();

// Line
ctx.beginPath();
ctx.moveTo(80,80)
ctx.lineTo(0,400)

ctx.moveTo(80,80)
ctx.lineTo(100,400)

ctx.moveTo(80,80)
ctx.lineTo(200,400)
ctx.lineWidth = 10;

ctx.strokeStyle = "red";

ctx.stroke();
