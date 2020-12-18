async function countingSort(array, visual)
{
    let startTime = window.performance.now();
    let step = 0;
    let low = array[0];
    let high = array[0];
    let arrLen = array.length;
    let countArr = [];
    let newArr = [];

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

    clear();
    drawArray2(array, undefined, undefined, undefined, 50, true);
    drawArray2(countArr, undefined, undefined, [0, 100], 50, true);
    drawArray2(newArr, undefined, undefined, [0, 200], 50, true);
    drawInfo("Counting sort", arrLen, step, endTime - startTime);

    return [array, [step, endTime - startTime]];
}
