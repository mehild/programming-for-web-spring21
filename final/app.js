//following week 5 tutorials
//challenge: need two different cards to be matches

const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
const cards = []; //new array
//where to fix 2 different card images = match?
const gameState = {
    totalPairs: 0,
    flippedCard: [],
    numMatched: 0,
    attepts: 0,
    waiting: false,
};

let cardfaceArray = [];
let cardBack;
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
    ];
}

function setup() {
    //createCanvas(windowWidth, windowHeight);
    createCanvas(1050, 500); //tutorial
    background(230, 230, 250);
    let selectedFaces = [];
    for (let z = 0; z < 6; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove cardface so it doesn't get selected again
        cardfaceArray.splice(randomIdx, 1);
    }

    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 2; j++){
        for (let i = 0; i < 6; i++) { //# of cards
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 150; // spacing
        }
        startingY += 150; 
        startingX = 100;
    }
}

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        //first check flipped cards length then trigger flip
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)){
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        if (gameState.flippedCards[0].faceImage === gameState, flippedCards[1].faceImage) {
            //cards match time to score
            //mark cards as match so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            //empty flippedCards array
            gameState.flippedCards.length = 0;
            //increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000) //more difficult by decreasing
        }
    }
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 100; //key card back
        this.height = 100; //key card back
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false; //
        this.show();
    }

//allignment issues no fill = chaos
    show () {
        if (this.face === UP || this.isMatch){
            fill('white');
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x, this.y, 100, 100)
        } else { 
            fill(0);
            rect(this.x, this.y, this.width, this.height, 10);
            image(cardBack, this.x, this.y, 100, 100)
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }

    flip () {
        if (this.face === DOWN) {
            this.face = UP;
          } else {
            this.face = DOWN;
          }
          this.show();
    }
}
function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
      // Pick randow index
      const idx = Math.floor(Math.random() * counter);
      // decrement counter by 1 (decrement)
      counter--;
      // swap the last element with it
      const temp = array[counter];
      array[counter] = array[idx];
      array[idx] = temp;
    }
    return array;
}