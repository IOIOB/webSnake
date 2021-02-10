
const BG_COLOUR = '#e6e3d9';
const FG_COLOUR = '#dbd9c5';
const SNAKE_COLOUR = '#2db34c';
const FOOD_COLOUR = '#bf413f';

const TILE_SIZE = 16;

const FRAME_TIME = 200;

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

const drawSnake = function (snake) {
    graphics.fillStyle = SNAKE_COLOUR
    snake.forEach(element => {
        graphics.fillRect(element.x * TILE_SIZE, element.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    });
};

const drawFood = function (fruit) {
    graphics.fillStyle = FOOD_COLOUR
    graphics.fillRect(fruit.x * TILE_SIZE, fruit.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
};

let game = initGame();

let lastTime = 0;

loop = function (currentTime) {
    let deltaTime = currentTime - lastTime;

    
    if (deltaTime >= FRAME_TIME){
        console.log(deltaTime);
        lastTime = currentTime;

        game = updateGame(game);

        drawBg();
        drawSnake(game.snake);
        drawFood(game.food);

        window.requestAnimationFrame(loop);
    }
    window.requestAnimationFrame(loop);
};

window.requestAnimationFrame(loop);

window.addEventListener('keydown', function(event) {
    console.log(event.key)
    switch (event.key) {
        case 'w':
            addInput(game, UP)
            break;
        case 's':
            addInput(game, DOWN)
            break;
        case 'a':
            addInput(game, LEFT)
            break;
        case 'd':
            addInput(game, RIGHT)
            break;
        default:
            break;
    }
})