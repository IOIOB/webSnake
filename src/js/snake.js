"use strict";

const TILE_SIZE = 16;
const WIDTH = 256 / TILE_SIZE;
const HEIGHT = 160 / TILE_SIZE;

const Point = (x, y) => ({x: x, y: y});

const pointEquals = (p1, p2) => (p1.x === p2.x) && (p1.y === p2.y);

let snake = [Point(5, 5)]