var img;
let xposition;
let yposition;
let ydirection = 1;
let yspeed = 1;

var stars = [];

function preload() {
  img = loadImage('moonForP5.jpg');
}

function setup() {
  createCanvas(400, 400);
  background('black');
  for (let s = 0; s <= 500; s++) {

    stars[s] = new Star();

    xposition = width / 4;
    yposition = 200;
  }

}

function draw() {
  background('black');

  for (var i = 0; i < stars.length; i++) {
    stars[i].draw();
  }

  image(img, xposition, yposition, width / 4, height / 4);

  yposition = yposition + yspeed * ydirection;

  if (yposition < 0 || yposition > 300) {
    ydirection *= -1;
  }
}

// This Star class was created by user wvnl.  The code can be accessed at https://editor.p5js.org/wvnl/sketches/5wnuHAXKd
