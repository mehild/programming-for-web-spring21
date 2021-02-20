
let bubble1;

function setup () {
  createCanvas(600, 400);
  bubble1 = new Bubble();
}

function draw () {
  background(0);
  bubble.move();
  bubble.show();
}

class Bubble {
  constructor () {
    this.x = 200;
    this.y = 150;
}

  move () {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show () {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}

//started with 1:1 of video tutorial