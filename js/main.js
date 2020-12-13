//<reference path="../P5Misc/p5.global-mode.d.ts" />

// Konstanter
const WINDOWSIZE = {
    X: 1200, 
    Y: 600
};
const INFOHEIGHT = 80;
const SPEED = 100;

// Variabler
let tick = 0;
let qStep = 0;

async function setup()
{
    createCanvas(WINDOWSIZE.X, WINDOWSIZE.Y);

    //bubbleSort(makeArray(10, 100));
    //await sleep(20000);
    //quickSort(makeArray(10, 100));
    //await sleep(20000);
    countingSort(makeArray(20, 50), [0, 50]);
}
  
async function draw()
{
    frameRate(60);

    tick++;
}