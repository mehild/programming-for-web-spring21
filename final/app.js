//following week 5 tutorials

function setup() {
    //createCanvas(windowWidth, windowHeight);
    createCanvas(800, 600); //tutorial
    background(230, 230, 250);
    let myCard = new Card();
}

class Card {
    constructor () {
        this.x = 100;
        this.y = 100;
        this.width = 80;
        this.height = 80;
        this.show();
    }

    show () {
        fill(0);
        rect(this.x, this.y, this.width, this.height, 10);
    }
}

