//following week 5 tutorials
//challenge: need two different cards to be matches

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

//let cardfaceArray = [];
let cardObjArray = [];
let cardBack;
function preload() {
    cardBack = loadImage('images/back.png');
    cardObjArray = [
        { imageA: loadImage('images/a.png'), imageB: loadImage('images/direct.png') },
        { imageA: loadImage('images/c.png'), imageB:loadImage('images/sissors.png') },
        { imageA: loadImage('images/i.png'), imageB:loadImage('images/eye.png') },
        { imageA: loadImage('images/p.png'), imageB:loadImage('images/pen.png') },
        { imageA: loadImage('images/v.png'), imageB:loadImage('images/select.png') },
        { imageA: loadImage('images/y.png'), imageB:loadImage('images/magic.png') },
   ];
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //createCanvas(1050, 500); //tutorial
    let selectedFaces = [];
    for (let z = 0; z < 6; z++) {
        const randomIdx = floor(random(cardObjArray.length));
        const cardObj = cardObjArray[randomIdx];
        selectedFaces.push(cardObj.imageA);
        selectedFaces.push(cardObj.imageB);
        //remove cardface so it doesn't get selected again
        cardObjArray.splice(randomIdx, 1);
    }

    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 2; j++){
        for (let i = 0; i < 6; i++) { //# of cards
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage.image, faceImage.image));
            startingX += 150; // spacing of cards
        }
        startingY += 150; 
        startingX = 100;
    }
}

function draw () {
    //background(230, 230, 250);
    //winner, reshuffle
    if (gameState.numMatched === gameState.totalPairs){
        fill('yellow');
        textSize(66);
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
    //fill(0);

    //typeface add
    textSize(33);
    text('attempts ' + gameState.attempts, 100, 500);
    text('matches ' + gameState.numMatched, 100, 400);
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
        gameState.attepts++;
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
            }, 1000) //more difficult by decreasing increment
        }
    }
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 120; //key card back
        this.height = 120; //key card back
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

//allignment cards
    show () {
        if (this.face === UP || this.isMatch){
            //fill('white');
            //rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x, this.y, 120, 120);
        } else { 
            //fill(0);
            //rect(this.x, this.y, this.width, this.height, 10);
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