
const BG_COLOUR = '#49494d';
const SNAKE_COLOUR = '#2db34c';
const FOOD_COLOUR = '#bf413f';

let canvas = document.getElementById('snake');
let graphics = canvas.getContext('2d');

let fill = function () {
    graphics.fillStyle = BG_COLOUR;
    graphics.fillRect(0, 0, canvas.width, canvas.height);
};

window.onload = function () {
    fill();
};