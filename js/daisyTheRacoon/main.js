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
  bg1 = loadImage('../../js/daisyTheRacoon/bg1.png');
  font = loadFont('../../js/daisyTheRacoon/assets/doto.ttf');
  
  img1 = loadImage('../../js/daisyTheRacoon/Hats/Beanie.png');
  img2 = loadImage('../../js/daisyTheRacoon/Hats/CowboyHat.png');
  img3 = loadImage('../../js/daisyTheRacoon/Hats/PirateHat.png');
  img4 = loadImage('../../js/daisyTheRacoon/Hats/SantaHat.png');
  img5 = loadImage('../../js/daisyTheRacoon/Hats/StrawHat.png');
  img6 = loadImage('../../js/daisyTheRacoon/Hats/TopHat.png');
  img7 = loadImage('../../js/daisyTheRacoon/Hats/WitchHat.png');

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