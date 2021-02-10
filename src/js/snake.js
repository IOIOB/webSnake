'use strict'

const TILE_SIZE = 16;
const WIDTH = 256 / TILE_SIZE;
const HEIGHT = 160 / TILE_SIZE;

Point = function(x, y) {
    this.x = x;
    this.y = y;
};

pointEquals = function(p1, p2) {
    return p1.x == p2.x && p1.y == p2.y;
};