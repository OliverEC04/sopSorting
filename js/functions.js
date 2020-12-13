function clog(value) // console.log værdi som string
{
    console.log(JSON.stringify(value));
}

function str(value) // shortcut for JSON.stringify()
{
    return JSON.stringify(value);
}

function arrayEqual(a, b) // Check om 2 arrays er ens
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

function makeArray(length, maxVal) // Lav array ud fra længde og max-værdi
{
    let array = [];

    for (let i = 0; i < length; i++)
    {
        array[i] = Math.floor(Math.random() * maxVal);
    }

    return array;
}

function drawArray(array, highlight, colors) // Tegn et array visuelt
{
    let arrLen = array.length;
    let arrMax = Math.max(...array);
    let rectSizeX = WINDOWSIZE.X / arrLen;

    for (let i = 0; i < arrLen; i++)
    {
        let rectSizeY = (WINDOWSIZE.Y - INFOHEIGHT) / arrMax * array[i] * .8;

        if (highlight != undefined && highlight.includes(i))
        {
            fill(240, 0, 0);

            for (let j = 0; j < highlight.length; j++)
            {
                if (colors != undefined && highlight[j] === i)
                {
                    fill(colors[j][0], colors[j][1], colors[j][2]);
                }
            }           
        }
        else
        {
            fill(240, 240, 240);
        }
        noStroke();
        rect(i * rectSizeX + rectSizeX * .1, WINDOWSIZE.Y * .9 - rectSizeY, rectSizeX * .8, rectSizeY, 4);
        textSize(20);
        text(str(array[i]), i * rectSizeX + rectSizeX * .1 + rectSizeX * .8 / 2, WINDOWSIZE.Y - 20);
    }
}

function drawArray2(array, highlight, colors, positionY) // Tegn en array, med index nummer
{
    let posY = positionY === undefined ? 0 : positionY;
    let arrLen = array.length;
    let sqrSize = WINDOWSIZE.X * .9 / arrLen;

    fill(240, 240, 240);
    noStroke();
    textSize(20);
    text("Index:", 0, WINDOWSIZE.Y * .1 + 80 + posY);
    text("Værdi:", 0, WINDOWSIZE.Y * .1 + 100 + posY);

    for (let i = 0; i < arrLen; i++)
    {
        if (highlight != undefined && highlight.includes(i))
        {
            fill(240, 0, 0);

            for (let j = 0; j < highlight.length; j++)
            {
                if (colors != undefined && highlight[j] === i)
                {
                    fill(colors[j][0], colors[j][1], colors[j][2]);
                }
            }           
        }
        else
        {
            fill(240, 240, 240);
        }
        
        noStroke();
        textSize(sqrSize * .5);
        text(str(i), i * sqrSize + WINDOWSIZE.X * .1 + sqrSize * .25, WINDOWSIZE.Y * .1 - sqrSize * .1 + 80 + posY);
        text(str(array[i] === undefined ? 0 : array[i]), i * sqrSize + WINDOWSIZE.X * .1 + sqrSize * .25, WINDOWSIZE.Y * .1 + sqrSize * .75 + 80 + posY);
        fill('rgba(0,0,0,0)');
        stroke(240, 240, 240);
        strokeWeight(sqrSize * .1);
        rect(i * sqrSize + WINDOWSIZE.X * .1, WINDOWSIZE.Y * .1 + 80 + posY, sqrSize, sqrSize);
    }
}

function sleep(ms) // Stop koden i antal ms (virker kun i async funktioner)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function drawInfo(name, length, steps, time)
{
    // Tegner baggrund til tekst-område
    noStroke();
    fill(60, 60, 60);
    rect(0, 0, WINDOWSIZE.X, INFOHEIGHT);

    if (name != undefined)
    {
        fill(240, 240, 240);
        // Sorteringsalgoritmens navn
        textSize(80);
        text(name, 0, 80);
    }

    if (length != undefined)
    {
        // Længden af arrayet
        textSize(20);
        text("Antal elementer: ", WINDOWSIZE.X * .5, 20);
        text(str(length), WINDOWSIZE.X * .5 + 300, 20);
    }

    if (steps != undefined)
    {
        // Antal steps
        textSize(20);
        text("Antal skridt: ", WINDOWSIZE.X * .5, 40);
        text(str(steps), WINDOWSIZE.X * .5 + 300, 40);
    }

    if (time != undefined)
    {
        // Køretid
        textSize(20);
        text("Køretid (ms): ", WINDOWSIZE.X * .5, 60);
        text(str(time), WINDOWSIZE.X * .5 + 300, 60);
    }
}

function compare(a, b)
{
    return a > b ? true : false;
}