var canvas=document.getElementById("canvas");
const ctx= canvas.getContext("2d");


ctx.fillStyle="red";
ctx.fillRect(50,50,150,100);

ctx.strokeRect(250,50,150,100);

ctx.fillStyle="green";

ctx.font= "30px Arial";
ctx.fillText("hello world",200,200);
ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150,50);
ctx.fillStyle="red";
ctx.lineTo(100,200);
ctx.lineTo(50,50);
// ctx.stroke();
ctx.fill();


ctx.beginPath();

ctx.moveTo(200,50);
ctx.lineTo(150,200);
ctx.lineTo(250,200);

ctx.closePath();
ctx.stroke();
ctx.fillStyle="orange";
ctx.fill();


ctx.beginPath();
ctx.rect(300,50,150,100);
ctx.fillStyle="green";
ctx.fill();

ctx.beginPath();
ctx.arc(300,300,100,0,Math.PI *2 );
ctx.stroke();
ctx.fillStyle="pink";
ctx.fill();

// radian= (math.PI)* 2 full circle
// radian= (math.PI) full circle
function clearCanvas(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
}
// clearCanvas();