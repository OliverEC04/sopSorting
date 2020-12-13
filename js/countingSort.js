async function countingSort(array, range)
{
    let step = 0;
    let arrLen = array.length;
    let countArr = [];
    let newArr = [];

    for (let i = range[0]; i <= range[1]; i++)
    {
        countArr[i] = 0;

        clear();
        drawArray2(array);
        drawArray2(countArr, [i], undefined, 100);
        drawInfo("Counting sort", arrLen, step);

        await sleep(SPEED);
        step++;
    }

    for (let i = 0; i < arrLen; i++)
    {
        countArr[array[i]]++;

        clear();
        drawArray2(array, [i]);
        drawArray2(countArr, [array[i]], undefined, 100);
        drawInfo("Counting sort", arrLen, step);

        await sleep(SPEED);
        step++;
    }

    for (let i = range[0] + 1; i <= range[1]; i++)
    {
        countArr[i] += countArr[i - 1];

        clear();
        drawArray2(array);
        drawArray2(countArr, [i], undefined, 100);
        drawInfo("Counting sort", arrLen, step);

        await sleep(SPEED);
        step++;
    }

    for (let i = 0; i < arrLen; i++)
    {
        countArr[array[i]]--;
        newArr[countArr[array[i]]] = array[i];

        clear();
        drawArray2(array, [i]);
        drawArray2(countArr, [array[i]], undefined, 100);
        drawArray2(newArr, [countArr[array[i]]], undefined, 200);
        drawInfo("Counting sort", arrLen, step);

        await sleep(SPEED);
        step++;
    }

    clear();
    drawArray2(array);
    drawArray2(countArr, undefined, undefined, 100);
    drawArray2(newArr, undefined, undefined, 200);
    drawInfo("Counting sort", arrLen, step);
}