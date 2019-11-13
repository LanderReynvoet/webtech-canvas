"use strict";

let canvas, context 

document.addEventListener("DOMContentLoaded", init);

function init() {
    
    canvas = document.querySelector('#playfield');
    context = canvas.getContext('2d');

    if (context){
        paintBrick(50, 50, 100, 50, 'blue')
        paintBall(400, 300, 20, 0, Math.PI * 2, 'rgba(0, 255, 0, 0.5)')
    }

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
}