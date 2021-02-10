"use strict";

const WIDTH = 16;
const HEIGHT = 10;


Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
    }

const mod = (n, m) => ((n % m) + m) % m;

const Point = (x, y) => ({x: x, y: y});

const UP    = Point(0, -1);
const DOWN  = Point(0, 1);
const LEFT  = Point(-1, 0);
const RIGHT = Point(1, 0);

const INPUT_LENGTH = 2;

const pointEquals = (p1, p2) => (p1.x === p2.x) && (p1.y === p2.y);

const willEatFood = (snek, food) => snek[0].x == food.x && snek[0].y == food.y;

const findFoodPosition = function (snake) {
    let x = 0;
    let y = 0;
    do {
        x = Math.floor(Math.random() * WIDTH);
        y = Math.floor(Math.random() * HEIGHT);
    } while (snake.find(element => element.x == x && element.y == y));
    return {x: x, y: y};
};

const initGame = function () {
    let game = {};
    
    game.input = [RIGHT];
    game.snake = [Point(4, 5)];
    game.food = Point(10, 5);

    return game;
};

const updateGame = function (game) {
    let nextGame = {};

    if (game.input.length > 1) {
        nextGame.input = game.input.slice(1, 3);
    }
    else {
        nextGame.input = game.input;
    }
    nextGame.food = game.food;

    nextGame.snake = game.snake;
    nextGame.snake.unshift({
        x: mod(game.snake[0].x + game.input[0].x, WIDTH),
        y: mod(game.snake[0].y + game.input[0].y, HEIGHT)
    });

    if (!willEatFood(nextGame.snake, nextGame.food)){
        nextGame.snake.pop()
    }
    else {
        nextGame.food = findFoodPosition(nextGame.snake);
    }

    return nextGame;
};

const addInput = function (game, direction) {
    if (
        direction.x + game.input[game.input.length-1].x != 0 &&
        direction.y + game.input[game.input.length-1].y != 0
    ){
        game.input.push(direction);
    }
};