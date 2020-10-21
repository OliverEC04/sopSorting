//<reference path="../P5Misc/p5.global-mode.d.ts" />

class BubbleSort
{
    constructor(data)
    {
        this.data = data;
        this.n = this.data.length;

        return this.sort();
    }

    sort()
    {
        let run = true;
        let dataList = [this.data];

        for (let i = 1; run; i++)
        {
            clog("1 " + dataList[i]);
            clog("2 " + dataList[i - 1]);
            dataList[i] = this.oneSort(dataList[i - 1]);
            run = !arraysEqual(dataList[i], dataList[i - 1]);
            clog("run " + run);
            clog("3 " + dataList[i]);
            clog("4 " + dataList[i - 1]);

            clog("sort() run index: " + String(i));
        }

        return dataList[dataList.length - 1];
    }

    oneSort(array)
    {
        let data = [...array];

        for (let i = 0; i < this.n; i++)
        {
            let comparison = this.compare(data[i], data[i + 1]);
            data[i] = comparison[0];
            data[i + 1] = comparison[1];
        }

        return data;
    }

    compare(a, b)
    {
        if (a > b)
        {
            return [b, a];
        }
        else
        {
            return [a, b];
        }
    }
}

let myData = [5, 2, 8, 1, 0, -3, -2, -1, 10, 2, 2, 45, 19, 30, 0];

function setup()
{
    let window = createVector(800, 800);
    createCanvas(window.x, window.y);

    clog(new BubbleSort(myData));
}
  
function draw()
{
    frameRate(60);
    background(200, 200, 200);
}

function clog(value)
{
    console.log(JSON.stringify(value));
}

function str(value)
{
    return JSON.stringify(value);
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }