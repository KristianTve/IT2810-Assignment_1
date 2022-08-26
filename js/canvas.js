var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// Circle
ctx.beginPath();
ctx.arc(80, 80, 30, 0, 2 * Math.PI, );
ctx.strokeStyle = "#FFFFFF";
ctx.fillStyle = 'darkgreen';
ctx.fill();
ctx.stroke();

// Line 1
ctx.beginPath();
ctx.moveTo(80,80)
ctx.lineTo(0,400)
ctx.lineWidth = 10;
ctx.strokeStyle = "seagreen";
ctx.stroke();

// Line 2
ctx.beginPath();
ctx.moveTo(80,80)
ctx.lineTo(100,400)
ctx.lineWidth = 10;
ctx.strokeStyle = "#000000";
ctx.stroke();

// Line 3
ctx.beginPath();
ctx.moveTo(80,80)
ctx.lineTo(200,400)
ctx.lineWidth = 10;
ctx.strokeStyle = "seagreen";


ctx.stroke();
