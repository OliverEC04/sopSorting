///<reference path="../P5Misc/p5.global-mode.d.ts" />

// Konstanter
const WINDOWSIZE = {
    X: 1200, 
    Y: 600
};
const INFOHEIGHT = 80;
const SPEED = 2000;
const WAIT = 10000;
const EXCELTYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const MLAYERHEIGHT = 30;

// Variabler
let tick = 0;
let qStep = 0;
let mStep = 0;


function setup()
{
    createCanvas(WINDOWSIZE.X, WINDOWSIZE.Y);
}
