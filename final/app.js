const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
  totalPairs: 5,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false
};
let cardBack;
let cardfaceArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);


function draw () {
}

// preload the images
function preload() {
  cardBack = loadImage('images/back.png');
  cardfaceArray = [
    loadImage('images/a.png'),
    loadImage('images/c.png'),
    loadImage('images/direct.png'),
    loadImage('images/eye.png'),
    loadImage('images/i.png'),
    loadImage('images/magic.png'),
    loadImage('images/p.png'),
    loadImage('images/pen.png'),
    loadImage('images/select.png'),
    loadImage('images/sissors.png'),
    loadImage('images/v.png'),
    loadImage('images/y.png'),
  ]
}



function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
      // Pick random index
      const idx = Math.floor(Math.random() * counter);
      // decrease counter by 1 (decrement)
      counter--;
      // swap the last element with it
      const temp = array[counter];
      array[counter] = array[idx];
      array[idx] = temp;
    }
    return array;
  }
}