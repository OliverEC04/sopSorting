//<reference path="../P5Misc/p5.global-mode.d.ts" />

class BubbleSort
{
    constructor(data)
    {
        this.data = data;
        this.n = this.data.length;
        this.steps = 0;

        return this.sort();
    }

    sort()
    {
        let run = true;
        let dataList = [this.data];

        for (let i = 1; run; i++)
        {
            dataList[i] = this.oneSort(dataList[i - 1]);
            run = !arrayEqual(dataList[i], dataList[i - 1]);

            this.steps++;
        }

        clog(this.steps + " steps");

        return dataList[dataList.length - 1];
    }

    oneSort(array)
    {
        let data = [...array];

        for (let i = 0; i < this.n - 1; i++)
        {
            let low = data[i] < data[i + 1] ? data[i] : data[i + 1];
            let high = data[i] > data[i + 1] ? data[i] : data[i + 1];

            data[i] = low;
            data[i + 1] = high;

            this.steps++;
        }

        return data;
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

function arrayEqual(a, b)
{
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i)
    {
        if (a[i] !== b[i]) return false;
    }
    
    return true;
  }