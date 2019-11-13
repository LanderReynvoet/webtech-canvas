"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    
    let canvas = document.querySelector('#playfield');
    let context = canvas.getContext('2d');

    context.fillStyle = 'blue';

    context.fillRect(50, 50, 100, 50);

    context.fillRect(150, 150, 100, 50);

    context.fillRect = 'green'
    
}

