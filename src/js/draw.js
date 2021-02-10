
const BG_COLOUR = '#e6e3d9';
const FG_COLOUR = '#dbd9c5';
const SNAKE_COLOUR = '#2db34c';
const FOOD_COLOUR = '#bf413f';

const TILE_SIZE = 16;

let canvas = document.getElementById('snake');
let graphics = canvas.getContext('2d');

let drawBg = function () {
    graphics.fillStyle = BG_COLOUR;
    graphics.fillRect(0, 0, canvas.width, canvas.height);
    graphics.fillStyle = FG_COLOUR
    for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++) {
            let drawX = x * TILE_SIZE + 1;
            let drawY = y * TILE_SIZE + 1;
            graphics.fillRect(drawX, drawY, TILE_SIZE - 2, TILE_SIZE - 2)
        }
    }
};

let drawSnake = function (snake) {
    graphics.fillStyle = SNAKE_COLOUR
    snake.forEach(element => {
        graphics.fillRect(element.x * TILE_SIZE, element.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    });
}

window.onload = function () {
    let game = initGame();
    drawBg();
    drawSnake(game.snake);
};