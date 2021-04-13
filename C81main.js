var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "blue"
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(250, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(300, 200, 40, 0, 2 * Math.PI);
ctx.stroke();



canvas.addEventListener("mousedown", myMouseDown)

function myMouseDown(e) {
    color = document.getElementById("Text_Color").value;
    mouseX = e.clientX-canvas.offsetLeft
    mouseY = e.clientY-canvas.offsetTop
    circle(mouseX, mouseY)
}

function circle(mouseX, mouseY) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function Clear_Area(){
ctx.clearRect(0,0,canvas.width,canvas.height)
}