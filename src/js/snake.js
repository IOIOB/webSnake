"use strict";

const WIDTH = 16;
const HEIGHT = 10;

const Point = (x, y) => ({x: x, y: y});

const UP    = Point(0, -1)
const DOWN  = Point(0, 1)
const LEFT  = Point(-1, 0)
const RIGHT = Point(1, 0)

const INPUT_LENGTH = 2;

const pointEquals = (p1, p2) => (p1.x === p2.x) && (p1.y === p2.y);

const initGame = function () {
    let game = {};
    
    game.snake = [Point(5, 5)]
    game.input = [RIGHT]

    return game
};