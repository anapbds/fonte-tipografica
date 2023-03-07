// GLOBAL VARS & TYPES
let bilu:Et;

let letra: L;

function setup() {

  createCanvas(windowWidth, windowHeight);

  letra = new L();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");
  letra.draw();
}