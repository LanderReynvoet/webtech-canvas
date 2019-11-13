"use strict";

let canvas, context;

let ballX, ballY;
let velocityX = 5 ;
let velocityY = -5;
let ballRadius = 20;

const [brickHeight, brickWidth, brickPadding] = [10, 100, 5];

let bricks = [];
const rows = 3;

document.addEventListener("DOMContentLoaded", init);

function init() {
    
    canvas = document.querySelector('#playfield');
    context = canvas.getContext('2d');

    ballX = canvas.width/2;
    ballY = (canvas.height);

    populateBricks();

    if (context){
        setInterval(drawLoop, 10);
    }

}

function drawLoop() {
    context.clearRect(0,0,canvas.width, canvas.height);

    let flattendArray = [].concat(...bricks);
    flattendArray.forEach((brick) => {paintBrick(brick.x, brick.y, brickWidth, brickHeight, brick.colour)});

    paintBall(ballX, ballY - ballRadius, ballRadius, 0, Math.PI * 2, 'rgba(0, 255, 0, 0.5)');
}

function detectBoundaryX() {
    if (ballX - ballRadius < 0  || ballX > canvas.width - ballRadius){
        velocityX = -velocityX;
    }
}
function detectBoundaryY() {
    if (ballY < 0 + (ballRadius * 2) || ballY > canvas.height){
        velocityY = -velocityY;
    }
}

function paintBrick(x, y, width, height, colour) {
    console.log(x,y);
    context.beginPath();
    context.fillStyle = colour;
    context.fillRect(x, y, width, height);
    context.closePath();
}

function paintBall(x, y, radius, startAngle, endAngle, colour) {
    context.beginPath();
    context.fillStyle = colour;
    context.arc(x, y, radius, startAngle, endAngle);
    context.fill();
    context.closePath();

    ballX += velocityX;
    ballY += velocityY;

    detectBoundaryX();
    detectBoundaryY();
}

function populateBricks() {
    const amountOfBrick = calculateBricks();
    for(let row = 0; row < rows; row++){
        bricks[row] = [];
        for(let col = 0; col < amountOfBrick; col++){
            let brick = {x:col * (brickWidth + brickPadding),
                         y:row * (brickHeight + brickPadding),
                         colour: 'red'
                        };
                    bricks[row][col] = brick;
        }
    }
    console.log(bricks);
}

function calculateBricks() {
    return Math.floor(canvas.width / brickWidth + brickPadding);
} 