async function quickSort(array)
{
    quickSortPart(array, 0, array.length - 1);
}

async function quickSortPart(array, start, end)
{
    let step = 0;
    let arrLen = array.length;
    let ref = start - 1;

    for (let i = start; i <= end; i++)
    {
        if (array[i] < array[end] || i == end)
        {
            ref++;

            let low = array[i];
            let high = array[ref];

            array[ref] = low;
            array[i] = high;
        }

        clear();
        drawArray(array, [i, ref, end], [[240, 0, 0], [0, 0, 240], [0, 240, 0]]);
        drawInfo("Quick sort", arrLen, qStep);

        await sleep(SPEED);
        clog(qStep);
        qStep++;
    }

    if (ref != start - 1)
    {
        quickSortPart(array, start, ref - 1);
        quickSortPart(array, ref + 1, end);
    }
    else
    {
        clear();
        drawArray(array);
        drawInfo("Quick sort", arrLen, qStep);
    }
}