let canvas;

//Game Stages
var stage = 0;
let stageWidth;

//player
let player;

let cam;

// backgrounds
let bg1;

//fonts
let font;

function preload() {
  Player.preload(); // call preload function in Player to preload sprites
  bg1 = loadImage('bg1.png');
  font = loadFont('assets/doto.ttf');
  /*
  img1 = loadImage('Hats/Beanie.png');
  img2 = loadImage('Hats/CowboyHat.png');
  img3 = loadImage('Hats/PirateHat.png');
  img4 = loadImage('Hats/SantaHat.png');
  img5 = loadImage('Hats/StrawHat.png');
  img6 = loadImage('Hats/TopHat.png');
  img7 = loadImage('Hats/WitchHat.png');
*/
}

function setup() {

  canvas = createCanvas(800, 500, WEBGL);
  canvas.parent('daisyTheRacoon-container');
  rectMode(CENTER);
  textAlign(CENTER);
  

  // camera object to follow player
  cam = createCamera();
  cam.ortho();
  cam.setPosition(width/2, height/2, 800);
  cam.lookAt(width/2, height/2, 0);
  
  // create player object, arguments are (xPos, yPos)
  player = new Player(width / 2, height / 2);
}

function draw() {  
  if(stage == 0) // load menu
    stage0();
  else if(stage == 1) // load stage 1
    stage1();
  else if(stage == 2) // load stage 2
    stage2();
  else if(stage == 3) // load stage 3
    stage3();
 }

function menu() {
  background(10,255,10);
  
}