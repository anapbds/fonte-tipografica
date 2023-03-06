// GLOBAL VARS & TYPES
let bilu:Et;

function setup() {

  createCanvas(windowWidth, windowHeight)
  
  bilu = new Et("green", "black", "green");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("pink");
  bilu.draw();
}