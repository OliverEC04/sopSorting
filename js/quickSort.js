async function quickSort(array, visual)
{
    let startTime = window.performance.now(); // Bestemmer starttidspunkt
    let resultArr = await quickSortPart(array, 0, array.length - 1, visual); // Sorterer listen, og venter til den er færdig med at fortsætte
    let endTime = window.performance.now(); // Bestemmer sluttidspunkt

    return [resultArr, [qStep, endTime - startTime]];
}

async function quickSortPart(array, start, end, visual)
{
    let arrLen = array.length;
    let ref = start - 1;
    let inactive = [];
    
    // Visuelt
    if (visual)
    {
        for (let i = 0; i < start; i++)
        {
            inactive.push(i);
        }
        for (let i = end; i < arrLen; i++)
        {
            inactive.push(i);
        }
    }

    // Kører den del af listen ignenem der skal sorteres
    for (let i = start; i <= end; i++)
    {
        qStep++;

        // Byt hvis i er mindre end pivot. Flyt pivot til fastlåste plads
        if (array[i] < array[end] || i == end)
        {
            ref++;
            
            let low = array[i];
            let high = array[ref];
            
            array[ref] = low;
            array[i] = high;
        }

        // Visuelt
        if (visual)
        {
            inactive[inactive.findIndex(e => e === i)] = -1;
    
            clear();
            drawArray(array, [i, ref < start ? -1 : ref, end].concat(inactive), [[240, 0, 0], [0, 0, 240], [0, 240, 0]]);
            drawInfo("Quick sort", arrLen, qStep);
    
            await sleep(SPEED);
        }
    }

    // Gentag sorteringen for de resterende dele, hvis nogle, ved hjælp af rekursion
    if (ref != start - 1)
    {
        await quickSortPart(array, start, ref - 1, visual);
        await quickSortPart(array, ref + 1, end, visual);
    }
    else
    {
        // Visuelt
        clear();
        drawArray(array);
        drawInfo("Quick sort", arrLen, qStep);

        return array;
    }
}
