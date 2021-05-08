//following week 5 tutorials

const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
const cards = []; //new array
const gameState = {
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
    for (let j = 0; j < 2; j++){
        for (let i = 0; i < 6; i++) { //# of cards
            cards.push(new Card(startingX, startingY, cardfaceArray[0]));
            startingX += 150; // spacing
        }
        startingY += 150; 
        startingX = 100;
    }
}

function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        if(cards[k].didHit(mouseX, mouseY)){
            console.log('flipped', cards[k]);

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
        this.show();
    }

//allignment issues no fill = chaos
    show () {
        if (this.face === DOWN){
            fill(0); //black, tried no fill, no luck
        rect(this.x, this.y, this.width, this.height, 10);
        //image(cardBack, this.x, this.y, 100, 100)
        } else { 
            fill('white');
        rect(this.x, this.y, this.width, this.height, 10);
        image(this.cardFaceImg, this.x, this.y, 100, 100)
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

