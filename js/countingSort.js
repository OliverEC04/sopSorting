async function countingSort(array, visual)
{
    let startTime = window.performance.now();
    let step = 0;
    let low = array[0];
    let high = array[0];
    let arrLen = array.length;
    let countArr = [];
    let newArr = [];

    // Find laveste og højeste værdi i listen
    for (let i = 0; i < arrLen; i++)
    {
        low = array[i] < low ? array[i] : low;
        high = array[i] > high ? array[i] : high;

        if (visual)
        {
            clear();
            drawArray2(array, [i, array.findIndex(e => e === low), array.findIndex(e => e === high)], [[240, 0, 0], [0, 0, 240], [0, 240, 0]], undefined, 50, true);
            drawInfo("Counting sort", arrLen, step);
    
            await sleep(SPEED);
        }

        step++;
    }

    // Lav en tælleliste der er lige så lang som den højeste værdi i den usorterede liste, og fyld tællelisten med nuller
    for (let i = low; i <= high; i++)
    {
        countArr[i] = 0;

        if (visual)
        {
            clear();
            drawArray2(array, [array.findIndex(e => e === low), array.findIndex(e => e === high)], [[0, 0, 240], [0, 240, 0]], undefined, 50, true);
            drawArray2(countArr, [i], undefined, [0, 100], 50, true);
            drawInfo("Counting sort", arrLen, step);
    
            await sleep(SPEED);
        }

        step++;
    }

    // Plus 1 i tællelisten for hver værdi i den usorterde liste
    for (let i = 0; i < arrLen; i++)
    {
        countArr[array[i]]++;

        if (visual)
        {
            clear();
            drawArray2(array, [i, array.findIndex(e => e === low), array.findIndex(e => e === high)], [[240, 0, 0], [0, 0, 240], [0, 240, 0]], undefined, 50, true);
            drawArray2(countArr, [array[i]], undefined, [0, 100], 50, true);
            drawInfo("Counting sort", arrLen, step);
    
            await sleep(SPEED);
        }

        step++;
    }

    // Akkummuler tællelisten
    for (let i = low + 1; i <= high; i++)
    {
        countArr[i] += countArr[i - 1];

        if (visual)
        {
            clear();
            drawArray2(array, [array.findIndex(e => e === low), array.findIndex(e => e === high)], [[0, 0, 240], [0, 240, 0]], undefined, 50, true);
            drawArray2(countArr, [i], undefined, [0, 100], 50, true);
            drawInfo("Counting sort", arrLen, step);
    
            await sleep(SPEED);
        }

        step++;
    }

    // Ryk de usorterede elementer på den sorterede plads i den sorterede liste
    for (let i = 0; i < arrLen; i++)
    {
        countArr[array[i]]--;
        newArr[countArr[array[i]]] = array[i];

        if (visual)
        {
            clear();
            drawArray2(array, [i, array.findIndex(e => e === low), array.findIndex(e => e === high)], [[240, 0, 0], [0, 0, 240], [0, 240, 0]], undefined, 50, true);
            drawArray2(countArr, [array[i]], undefined, [0, 100], 50, true);
            drawArray2(newArr, [countArr[array[i]]], undefined, [0, 200], 50, true);
            drawInfo("Counting sort", arrLen, step);
    
            await sleep(SPEED);
        }

        step++;
    }

    let endTime = window.performance.now();

    // Visuelt
    clear();
    drawArray2(array, undefined, undefined, undefined, 50, true);
    drawArray2(countArr, undefined, undefined, [0, 100], 50, true);
    drawArray2(newArr, undefined, undefined, [0, 200], 50, true);
    drawInfo("Counting sort", arrLen, step, endTime - startTime);

    return [array, [step, endTime - startTime]];
}
