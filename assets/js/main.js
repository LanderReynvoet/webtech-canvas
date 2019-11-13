"use strict";

let canvas, context 

document.addEventListener("DOMContentLoaded", init);

function init() {
    
    canvas = document.querySelector('#playfield');
    context = canvas.getContext('2d');

    if (context){
        paintBrick(50, 50, 100, 50, 'blue')
    }

}

function paintBrick(x, y, width, height, colour) {
    context.beginPath();
    context.fillStyle = colour;
    context.fillRect(x, y, width, height);
    context.closePath();
}