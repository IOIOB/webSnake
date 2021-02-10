"use strict";

const TILE_SIZE = 16;
const WIDTH = 256 / TILE_SIZE;
const HEIGHT = 160 / TILE_SIZE;

const Point = function(x, y) {
    this.x = x;
    this.y = y;
};

const pointEquals = (p1, p2) => p1.x == p2.x && p1.y == p2.y;