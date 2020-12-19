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
    // Shortcuts
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    // Kør gennem hele loopet, og retuner false så snart et element ikke er ens
    for (var i = 0; i < a.length; ++i)
    {
        if (a[i] !== b[i]) return false;
    }

    return true;
}

function makeArray(length, maxVal) // Lav array ud fra længde og max-værdi
{
    let array = [];

    // Fyld arrayet op med tilfældige værdier
    for (let i = 0; i < length; i++)
    {
        array[i] = Math.floor(Math.random() * maxVal);
    }

    return array;
}

function drawArray(array, highlight, colors) // Tegn et liste visuelt med størrelse
{
    let arrLen = array.length;
    let arrMax = Math.max(...array);
    let rectSizeX = WINDOWSIZE.X / arrLen;

    // Kører igennem listen
    for (let i = 0; i < arrLen; i++)
    {
        let rectSizeY = (WINDOWSIZE.Y - INFOHEIGHT) / arrMax * array[i] * .8; // Bestemmer bredden af rektanglet ud fra antallet af elementer, og vinduestørrelsen

        // Farv de higlightede elementer
        if (highlight != undefined && highlight.includes(i))
        {
            fill(100, 100, 100);

            for (let j = 0; j < highlight.length; j++)
            {
                if (colors != undefined && colors[j] != undefined && highlight[j] === i)
                {
                    fill(colors[j][0], colors[j][1], colors[j][2]);
                }
            }           
        }
        else
        {
            fill(240, 240, 240);
        }
        // Tegn rektanglet
        noStroke();
        rect(i * rectSizeX + rectSizeX * .1, WINDOWSIZE.Y * .9 - rectSizeY, rectSizeX * .8, rectSizeY, 4);
        textSize(20);
        text(str(array[i]), i * rectSizeX + rectSizeX * .1 + rectSizeX * .8 / 2, WINDOWSIZE.Y - 20);
    }
}

function drawArray2(array, highlight, colors, position, maxSize, labels) // Tegn en array, med index nummer
{
    let posX = 0;
    let posY = 0;
    let arrLen = array.length;
    let sqrSize = WINDOWSIZE.X * .9 / arrLen; // Bestemmer bredden af kvadraten ud fra antallet af elementer, og vinduestørrelsen

    // Bestemmer positionen hvis den ikke er angivet
    if (position != undefined)
    {
        posX = position[0] === undefined ? 0 : position[0];
        posY = position[1] === undefined ? 0 : position[1];
    }

    // Bestemmer størrelsen hvis den ikke er angivet
    if (maxSize != undefined)
    {
        sqrSize = WINDOWSIZE.X * .9 / arrLen > maxSize ? maxSize : WINDOWSIZE.X * .9 / arrLen;
    }

    // Tegn forklaringen til venstre for listen
    if (labels)
    {
        fill(240, 240, 240);
        noStroke();
        textSize(20);
        text("Index:", posX, WINDOWSIZE.Y * .1 + 80 + posY);
        text("Værdi:", posX, WINDOWSIZE.Y * .1 + 100 + posY);
    }

    // Kører listen igennem
    for (let i = 0; i < arrLen; i++)
    {
        // Farv element hvis det er highlightet
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
        // Tegner element
        noStroke();
        textSize(sqrSize * .5);
        text(str(i), posX + i * sqrSize + WINDOWSIZE.X * .1 + sqrSize * .25, WINDOWSIZE.Y * .1 - sqrSize * .1 + 80 + posY);
        text(str(array[i] === undefined ? 0 : array[i]), posX + i * sqrSize + WINDOWSIZE.X * .1 + sqrSize * .25, WINDOWSIZE.Y * .1 + sqrSize * .75 + 80 + posY);
        fill('rgba(0,0,0,0)');
        stroke(240, 240, 240);
        strokeWeight(sqrSize * .1);
        rect(posX + i * sqrSize + WINDOWSIZE.X * .1, WINDOWSIZE.Y * .1 + 80 + posY, sqrSize, sqrSize);
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

function compare(a, b) // Sammenligner om a er større end b
{
    return a > b ? true : false;
}

function arrayToExcel(sheetsArray, name) // Gemmer en liste i et excel ark
{
    let sheet = [];
    let workbook = {
        Sheets:{},
        SheetNames:[]
    };

    // Tilføjer hver liste i listen, som en række i excel arket
    for (let i = 0; i < sheetsArray.length; i++)
    {
        sheet[i] = XLSX.utils.aoa_to_sheet(sheetsArray[i]);
        workbook.Sheets[str(i)] = sheet[i];
        workbook.SheetNames[i] = str(i);
    }

    let excelBuffer = XLSX.write(workbook, {bookType:'xlsx', type:'array'});

    saveExcel(excelBuffer, name === undefined ? "Untitled" : str(name));
}

function saveExcel(buffer, name) // Gemmer excel arket på computeren
{
    let excelData = new Blob([buffer], {type: EXCELTYPE});
    saveAs(excelData, name + ".xlsx");
}

async function benchmark(algorithm, elementCountRange, repetitions, maxElementValue) // Find antal operationer og køretid på en algoritme som excel ark
{
    let outputData = [["Antal operationer", "Køretid (ms)", "Antal operationer akummuleret", "Køretid akummuleret (ms)", "Antal elementer"]];
    let calcData = [["Antal elementer", "Antal operationer gennemsnit", "Køretid gennemsnit (ms)"]];

    for (let e = elementCountRange[0]; e <= elementCountRange[1]; e++) // Antal elementer
    {
        for (let i = 0; i < repetitions; i++) // Antal gentagelser for hvert antal elementer
        {
            qStep = 0;
            outputData[i + e * repetitions] = await algorithm(makeArray(e, maxElementValue), false); // Antal operationer og køretid for hver gentagelse

            if (i > 0)
            {
                outputData[i + e * repetitions][2] = outputData[i - 1 + e * repetitions][2] + outputData[i + e * repetitions][1][0]; // Akummuler antal operationer
                outputData[i + e * repetitions][3] = outputData[i - 1 + e * repetitions][3] + outputData[i + e * repetitions][1][1]; // Akummuler køretiden
            }
            else
            {
                outputData[i + e * repetitions][2] = outputData[i + e * repetitions][1][0]; // Akummuler antal operationer
                outputData[i + e * repetitions][3] = outputData[i + e * repetitions][1][1]; // Akummuler køretiden
            }

            outputData[i + e * repetitions][4] = e; // Tilføj antal elementer til excelarket
        }

        calcData[e] = []; // Laver ny række
        calcData[e][0] = e; // Antal elementer
        calcData[e][1] = outputData[repetitions - 1 + e * repetitions][2] / repetitions; // Gennemsnitlig antal operationer for hver antal elementer
        calcData[e][2] = outputData[repetitions - 1 + e * repetitions][3] / repetitions; // Gennemsnitlig køretid for hver antal elementer
    }

    arrayToExcel([outputData, calcData]);
}
