const DOWN = 'down';
const UP = 'up';

let startingX = 200;
let startingY = 200;
let cards = [];

const gameState = {
    totalPairs: 6,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false,
};

//from tutorials
const DOWN = 'down';
const UP = 'up';
let startingX = 100; 
let startingY = 100;
let cards = [];
const gameState = {
};

let cardfaceArray = [];
let cardback;
function preload(){
    cardback = loadImage('img/cardback.png');
    cardfaceArray = [
        loadImage('img/flake1.jpg'),
        loadImage('img/flake2.jpg'),
        loadImage('img/flake3.jpg'),
        loadImage('img/flake4.jpg'),
        loadImage('img/flake5.jpg'),
        loadImage('img/flake6.jpg')
    ];
}

function setup() {
    createCanvas(1000, 800);
    background(0);
    for (let j = 0; j < 5; j++){
        for (let i = 0; i < 5; i++){
            cards.push(new Card(startingX, startingY));
            startX += 120; 
        }   
        startingY += 150;
        startingX = 100; 
    }
}

function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        if(cards[k].didHit(mouseX, mouseY)){
            console.log('flipped');
        }
    }
}

class Card {
    constructor (x,y){
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 100;
        this.face = DOWN
        this.show();
    }

    show (){
        if (this.face === DOWN) {
            fill('#000');
            rect(this.x, this.y, this.width, this.height, 10)
            image(cardback, this.x, this.y)
        } else {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height, 10)
        }
        
    }

    didHit(mouseX, mouseY) {
        if(mouseX >= this.x && mouseX <= this.x + this.width && mouseY>= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;   
        } else {
            return false;
        }
    }

    flip () {
        if (this.face === DOWN ) {
            this.face = UP; 
        } else {
            this.face = DOWN; 
        }
        this.show();
    }
}