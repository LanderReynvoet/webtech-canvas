"use strict";

let canvas, context;

let ballX, ballY;
let velocityX = 5 ;
let velocityY = -5;

document.addEventListener("DOMContentLoaded", init);

function init() {
    
    canvas = document.querySelector('#playfield');
    context = canvas.getContext('2d');

    ballX = canvas.width/2;
    ballY = (canvas.height - canvas.height/5);

    if (context){
        setInterval(drawLoop, 10);
    }

}

function drawLoop() {
    context.clearRect(0,0,canvas.width, canvas.height);
    paintBrick(50, 50, 100, 50, 'yellow');
    paintBall(ballX, ballY, 10, 0, Math.PI * 2, 'rgba(0, 255, 0, 0.5)');
}

function paintBrick(x, y, width, height, colour) {
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
}