var img;
let xPosition;
let yPosition;
let yDirection = 1;
let ySpeed = .3;
let xAstroPos;
let yAstroPos;
let astroSpeed = .18;
let astroDir = 1;

var stars = [];

function preload() {
  img = loadImage('fullMoon.png');
  astro = loadImage('astro.png');
}

function setup() {
  createCanvas(400, 400);
  background('black');
  for (let s = 0; s <= 500; s++) {

    stars[s] = new Star();

    xPosition = width / 4;
    yPosition = 200;
    
    xAstroPos = 00;
    yAstroPos = 50;
  }

}

function draw() {
  background('black');

  for (var i = 0; i < stars.length; i++) {
    stars[i].draw();
  }

  image(img, xPosition, yPosition, width / 4, height / 4);
  
  image(astro, xAstroPos, yAstroPos, width/4, height/4);

  yPosition = yPosition + ySpeed * yDirection;

  if (yPosition < 0 || yPosition > 300) {
    yDirection *= -1;
  }
  
  xAstroPos = xAstroPos + astroSpeed * astroDir;
  if(xAstroPos < 0 || xAstroPos > 300) {
    astroDir *= -1;
  }
  
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(0.25, 3);
    this.t = random(TAU);
  }

  draw() {
    this.t += 0.03;
    var scale = this.size + sin(this.t) * 2;
    noStroke();
    square(this.x, this.y, scale);
  }
}
// This Star class was created by user wvnl.  The code can be accessed at https://editor.p5js.org/wvnl/sketches/5wnuHAXKd
