//following week 5 tutorials
const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
const cards = []; //new array
const gameState = {

};

function setup() {
    //createCanvas(windowWidth, windowHeight);
    createCanvas(1050, 500); //tutorial
    background(230, 230, 250);
    for (let j = 0; j < 2; j++){
        for (let i = 0; i < 6; i++) { //# of cards
            cards.push(new Card(startingX, startingY));
            startingX += 150; // spacing
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
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.width = 100; //key card back
        this.height = 100; //key card back
        this.face = DOWN;
        this.show();
    }

    show () {
        if (this.face === DOWN){
            fill(0); //black
        rect(this.x, this.y, this.width, this.height, 10);
        } else { 
            fill('gray');
        rect(this.x, this.y, this.width, this.height, 10);
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

