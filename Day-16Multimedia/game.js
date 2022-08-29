// selector
var btn=document.getElementById("btn");
btn.onclick= function (){
  document.getElementById('bg').play()
  document.getElementById("loader").style.display="none";
  document.getElementById("container").style.display="block";
 }
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var count = 0;
const image = document.getElementById("source");
const image2 = document.getElementById("source1");
var back=document.getElementById("container");
var end=document.getElementById("ender")
const player = {
  w: 500,
  h: 500,
  x: 0,
  y: 200,
  speed: 5,
  dx: 0,
  dy: 0,
};
const player2 = {
  w: 500,
  h: 500,
  x: 1600,
  y: 210,
  speed: 5,
  dx: 0,
  dy: 0,
};



function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
  ctx.drawImage(image2, player2.x, player2.y, player2.w, player2.h);
}
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
  player.x += player.dx;
  player.y += player.dy;

  player2.x += player2.dx;
  player2.y += player2.dy;

  detectWalls();
  hit();
}
function hit(){
  if ((player.x + player.w)-100 == player2.x-20) {
    back.style.display="none";
    
    setTimeout(view,500);
  }
function view(){
  end.style.display="block";
  end.play();
}
}

function detectWalls() {
  // Left wall
  if (player.x < 0) {
    player.x = 0;
  }

  // Right Wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width- player.w;
  }

  // Top wall
  if (player.y < 0) {
    player.y = 0;
  }

  // Bottom Wall
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
  
  if (player2.x < 0) {
    player2.x = 0;
  }

  // Right Wall
  if (player2.x + player2.w > canvas.width) {
    player2.x = canvas.width - player2.w;
  }

  // Top wall
  if (player2.y < 0) {
    player2.y = 0;
  }

  // Bottom Wall
  if (player2.y + player2.h > canvas.height) {
    player2.y = canvas.height - player2.h;
  }
}
// Create Animation
function update() {
  clear();

  drawPlayer();

  newPos();

  requestAnimationFrame(update);
}

// function moveUp() {
//   player.dy = -player.speed;
// }

// function moveDown() {
//   player.dy = player.speed;
// }

function moveRight() {
  player.dx = player.speed;
  
}
function moveRight2() {
  player2.dx = player2.speed;
  
}

function moveLeft() {
  player.dx = -player.speed;
}

function moveLeft2() {
  player2.dx = -player2.speed;
}

function keyDown(e) {
  console.log(e.key);
  // if (e.key === "ArrowRight" || e.key === "Right") {
  //   moveRight();
  // } else if (e.key === "ArrowLeft" || e.key === "Left") {
  //   moveLeft();
  // }
  if (e.key === "D" || e.key === "d") {
    moveRight();
    performedAudioTask();
    
    
  } else if (e.key === "A" || e.key === "a") {
    moveLeft();
  }
  //  else if (e.key === "ArrowUp" || e.key === "Up") {
  //   moveUp();
  // } else if (e.key === "ArrowDown" || e.key === "Down") {
  //   moveDown();
  // }
}

function keyDown2(e) {
 
  // if (e.key === "D" || e.key === "d") {
  //   moveRight2();
  // } else if (e.key === "A" || e.key === "a") {
  //   moveLeft2();
  // }
  if (e.key === "ArrowRight" || e.key === "Right") {
      moveRight2();
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
      moveLeft2();
      performedAudioTask2();
    }
  //  else if (e.key === "ArrowUp" || e.key === "Up") {
  //   moveUp();
  // } else if (e.key === "ArrowDown" || e.key === "Down") {
  //   moveDown();
  // }
}

function keyUp(e) {
  if (
    // e.key == "Right" ||
    // e.key == "ArrowRight" ||
    // e.key == "Left" ||
    // e.key == "ArrowLeft" ||
    
    e.key == "D" ||
    e.key == "d" ||
    e.key == "A" ||
    e.key == "a"

    // e.key == "Up" ||
    // e.key == "ArrowUp" ||
    // e.key == "Down" ||
    // e.key == "ArrowDown"
  ) 
  // {
  //   player.dx = 0;
  //   player.dy = 0;
  // }
    player.dx = 0;
    player.dy = 0;
  
}
function keyUp2(e) {
  if (
    e.key == "Right" ||
    e.key == "ArrowRight" ||
    e.key == "Left" ||
    e.key == "ArrowLeft" 
    
    // e.key == "D" ||
    // e.key == "d" ||
    // e.key == "A" ||
    // e.key == "a"

    // e.key == "Up" ||
    // e.key == "ArrowUp" ||
    // e.key == "Down" ||
    // e.key == "ArrowDown"
   ) 
   {
    player2.dx = 0;
    player2.dy = 0;
  }
    // player2.dx = 0;
    // player2.dy = 0;
  
}

update();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

document.addEventListener("keydown", keyDown2);
document.addEventListener("keyup", keyUp2);


var audio= document.getElementById("sasukeAudio");
var audio2= document.getElementById("narutoAudio");


function performedAudioTask(){
    if(player.x==380){
    sasukeAudio.play();
    }
    // if (sasukeAudio.muted==true){
    //     sasukeAudio.muted=false;
    // }
    // else{
    //     sasukeAudio.muted=true;
    // }
    
}

function performedAudioTask2(){

    narutoAudio.play();
  
  // if (sasukeAudio.muted==true){
  //     sasukeAudio.muted=false;
  // }
  // else{
  //     sasukeAudio.muted=true;
  // }
  
}