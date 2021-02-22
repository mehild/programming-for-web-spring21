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

//card images

let cardfaceArray = [];
let cardback;
function preload() {
    cardback = loadImage('img/cardback.png');
    cardfaceArray = [
        loadImage('img/flake1.jpg'),
        loadImage('img/flake2.jpg'),
        loadImage('img/flake3.jpg'),
        loadImage('img/flake4.jpg'),
        loadImage('img/flake5.jpg'),
        loadImage('img/flake6.jpg'),
    ];
}




function setup() {
    createCanvas(200, 200);
    noLoop();
}

function createTile() {
    translate(0, 0);
    fill('#cceeff');
    circle(200, 200);
    stroke('#558000');
    strokeWeight('10');
}

function draw() {
    createTile();
}






const circleDiameter = 200;

let startingX = 250;
let startingY = 250;
let myCircles = [];
let startingId = 0;
function setup () {
    createCanvas(windowWidth, windowHeight);
    background('#66ccff');
    fill ('#cceeff');
    stroke ('white');
    
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < 4; i++) {
            ellipse(startingX, startingY, circleDiameter);
            myCircles.push({ x: startingX, y: startingY, id: startingId });
            startingX += 230;
            startingId++;
        }
        startingY += 230;
        startingX = 250;
    }
    
    console.log(myCircles);
}

function mousePressed() {
    for (let j = 0; j < myCircles.length; j++) {
        let distance = dist(mouseX, mouseY, myCircles[j].x, myCircles[j].y);
        if (distance < circleDiameter / 2) {
            console.log('circle has been click', myCircles[j].id);
        }
    }
}