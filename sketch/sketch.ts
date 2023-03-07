// GLOBAL VARS & TYPES
let bilu:Et;

let letra: L;

function setup() {

  createCanvas(windowWidth, windowHeight)
  
  bilu = new Et("green", "black", "green");

  letra = new L();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("pink");
  letra.draw();
}