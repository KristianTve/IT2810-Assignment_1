var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var circcol = 'darkgreen'
var line1col = 'seagreen'
var line2col = 'black'
var line3col = 'seagreen'
var arrowstroke = 'red'
var arrowfill = 'darkred'

function drawCanvas() {
    // Circle
    ctx.beginPath();
    ctx.arc(80, 80, 30, 0, 2 * Math.PI, );
    ctx.strokeStyle = "#FFFFFF";
    ctx.fillStyle = circcol;
    ctx.fill();
    ctx.stroke();

// Line 1
    ctx.beginPath();
    ctx.moveTo(80,80)
    ctx.lineTo(0,400)
    ctx.lineWidth = 10;
    ctx.strokeStyle = line1col;
    ctx.stroke();

// Line 2
    ctx.beginPath();
    ctx.moveTo(80,80)
    ctx.lineTo(100,400)
    ctx.lineWidth = 10;
    ctx.strokeStyle = line2col;
    ctx.stroke();

// Line 3
    ctx.beginPath();
    ctx.moveTo(80,80)
    ctx.lineTo(200,400)
    ctx.lineWidth = 10;
    ctx.strokeStyle = line3col;
    ctx.stroke();

// Arrow
    ctx.beginPath();
    ctx.moveTo(25,0)
    ctx.lineTo(70,45)
    ctx.lineTo(170,145)
    ctx.lineTo(-10,45)
    ctx.lineTo(25,0)
    ctx.lineWidth = 10;
    ctx.fillStyle = arrowfill
    ctx.strokeStyle = arrowstroke;
    ctx.fill()


    ctx.stroke();
}

drawCanvas()

