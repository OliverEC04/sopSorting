//<reference path="../P5Misc/p5.global-mode.d.ts" />

function setup()
{
    let window = createVector(800, 800);
    createCanvas(window.x, window.y);

    clog(new BubbleSort(makeArray(10000, 100000000000)));
}
  
function draw()
{
    frameRate(60);
    background(200, 200, 200);
}