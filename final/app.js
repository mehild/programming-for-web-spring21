//following week 5 tutorials
let myCard;
const DOWN = 'down';
const UP = 'up';

function setup() {
    //createCanvas(windowWidth, windowHeight);
    createCanvas(800, 600); //tutorial
    background(230, 230, 250);
    myCard = new Card();
}

function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));

}

class Card {
    constructor () {
        this.x = 100;
        this.y = 100;
        this.width = 80; //key
        this.height = 80; //key
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

