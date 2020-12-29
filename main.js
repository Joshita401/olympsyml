canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 8;
ctx.rect(130, 138, 430 ,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(240, 210, 40 ,0,2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(340, 210, 40 ,0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(440, 210, 40 ,0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(290, 250, 40 ,0, 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(390, 250, 40 ,0, 2* Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);







//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}