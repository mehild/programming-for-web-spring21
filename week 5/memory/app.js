const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
const cards = []; //new array

const gameState = {
    totalPairs: 6,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false,
};

let cardfaceArray = [];
let cardBack;
function preload() {
    cardBack = loadImage('img/cardback.png');
    cardfaceArray = [
        loadImage('img/flake1.png'),
        loadImage('img/flake2.png'),
        loadImage('img/flake3.png'),
        loadImage('img/flake4.png'),
        loadImage('img/flake5.png'),
        loadImage('img/flake6.png'),
    ];
}

function setup() {
    createCanvas(windowWidth, windowHeight);
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

function draw () {
    //winner, reshuffle
    if (gameState.numMatched === gameState.totalPairs){
        fill('red');
        textSize(100);
        text('winner', 425, 250);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if (!cards[k].isMatch) {
          cards[k].face = DOWN;
        }
        cards[k].show();
    }
    //scorecard
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill('white');
    //typeface add
    textSize(33);
    text('attempts: ' + gameState.attempts, 50, 30);
    text('matches: ' + gameState.numMatched, 250, 30);
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
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.
        flippedCards[1].cardFaceImg) {
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
            image(this.cardFaceImg, this.x, this.y, 120, 120)
        } else { 
            image(cardBack, this.x, this.y, 120, 120)
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