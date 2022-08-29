// selector
var canvas=document.getElementById("canvas");
const ctx =canvas.getContext("2d");

//animation
var circle= {
    x:200,
    y:200,
    size:100,
    dx:5,
    dy:5,

};

//Draw circle
function drawCircle(){
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, 2*Math.PI);
    ctx.fillStyle="purple";
    ctx.fill();
} 

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCircle();
    circle.x+=circle.dx;
    circle.y+=circle.dy;

    // detect ball 
    if (circle.x +circle.size >canvas.width || circle.x - circle.size < 0)
    {
        circle.dx *=-1;
    } 
    if (circle.y +circle.size >canvas.height || circle.y - circle.size < 0)
    {
        circle.dy *=-1;
    } 

    requestAnimationFrame(update);
    console.log(123);
}
update();