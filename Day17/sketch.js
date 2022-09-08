

// Global Scope
var bg, bgImage;
var mario, mario_running;
var ground;
var brickImage, bricksGroup;
var coins, coinsGroup;
var coinScore = 0;

// Load Assets
function preload() {
  bgImage = loadImage("KONOHA.jpg");
  mario_running = loadAnimation(
    "ImagesAssets/naruto_running1.png",
    "ImagesAssets/naruto_running2.png",
    "ImagesAssets/naruto_running3.png",
    "ImagesAssets/naruto_running4.png",
    "ImagesAssets/naruto_running5.png",
    "ImagesAssets/naruto_running6.png"
  );
  brickImage = loadImage("images/brick.png");
  coinImage = loadAnimation("ImagesAssets/shuriken1.png","ImagesAssets/shuriken2.png","ImagesAssets/shuriken3.png","ImagesAssets/shuriken4.png")
  coinSound=loadSound("sounds/coinSound.mp3")
}

// create basic Scaleton with their required credentials
function setup() {
  // Create Canvas
  createCanvas(1200, 900);

  // create Objects
  bg = createSprite(600, 300, 150, 50);
  mario = createSprite(200, 520, 150, 50);

  // Add pictures on Objects
  bg.addImage(bgImage);
   
  mario.addAnimation("running", mario_running);

  // Scale Objects
  bg.scale = 0.5;
  mario.scale = 1.5;

  // create Ground
  ground = createSprite(200, 580, 400, 10);
  bricksGroup = new Group();
  coinsGroup = new Group();
  
}

// Used to redraw the Objects on the canvas
function draw() {
  // Make background move and repeate
  bg.velocityX = -5;
  if (bg.x < 150) bg.x = bg.width / 5 ;
  // mario Fly
  if (keyDown("space")) mario.velocityY = -10;

  // add Gravity
  mario.velocityY = mario.velocityY + 0.5;

  // mario stuck on ground
  mario.collide(ground);
  ground.visible = false;

  // call GenerateBricks
  generateBricks();

  
  for (var i = 0; i < bricksGroup.length; i++) {
    var temp = bricksGroup.get(i);
    if (mario.isTouching(temp)) {
      mario.collide(temp);
    }
  }
  if (mario.x < 200) {
    mario.x = 200;
  }
  if (mario.y < 50) {
    mario.y = 50;
  }

generateCoins();
// console.log("Score: "+coinScore);
for (var i = 0; i < coinsGroup.length; i++) {
    var temp = coinsGroup.get(i);
    if (mario.isTouching(temp)) {
      temp.destroy();
      coinScore++;
      temp=null;
      coinSound.play();
    }
  }
  // Redraw Objects
  drawSprites();
}
function generateCoins() {
    if (frameCount % 50 == 0) {
    //   console.log(frameCount);
      var coin = createSprite(300, 100, 40, 10);
      coin.y = random(200, 500);
      coin.addAnimation("rotation",coinImage);
      coin.scale = 0.5;
      coin.velocityX = -5;
      coin.lifetime = 400;
      coinsGroup.add(coin);
    }
  }
function generateBricks() {
  if (frameCount % 80 == 0) {
    // console.log(frameCount);

    var brick = createSprite(1200, 100, 40, 10);
    brick.y = random(50, 450);
    brick.addImage(brickImage);
    brick.scale = 0.5;
    brick.velocityX = -5;
    brick.lifetime = 250;
    bricksGroup.add(brick);
  }
}