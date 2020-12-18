async function mergeSort(array, visual)
{
    let startTime = window.performance.now();
    let arrLen = array.length;
    let resultArr = await mergeSortPart(array, arrLen, visual);
    let endTime = window.performance.now();

    return [resultArr, [mStep, endTime - startTime]];
}

async function mergeSortPart(array, arrLen, visual)
{
    // Spring over sortering hvis der kun er 1 eller mindre elementer
    if (array.length <= 1)
    {
        return array;
    }

    let middle = Math.floor(array.length / 2); // Index til midten af arrayet
  
    let arr1 = array.slice(0, middle); // Venstre array
    let arr2 = array.slice(middle); // Højre array
  
    if (visual)
    {
        drawArray2(array, undefined, undefined, [WINDOWSIZE.X / 2, MLAYERHEIGHT * mLayer], 15);
        drawInfo("Merge sort", arrLen, mStep);

        await sleep(SPEED);
    }

    mStep++;

    return await merge(await mergeSortPart(arr1, arrLen, visual), await mergeSortPart(arr2, arrLen, visual), arrLen, visual); // Split højre og venstre array, indtil der kun er 1 element (se linje 3), og sorter
}

async function merge(arr1, arr2, arrLen, visual)
{
    let resultArr = [];
    let iArr1 = 0;
    let iArr2 = 0;

    // Fletter de to arrays sorteret sammen
    while (iArr1 < arr1.length && iArr2 < arr2.length)
    {
        if (arr1[iArr1] < arr2[iArr2]) // Hvis aktuelle element i arr1 er mindre end aktuelle element i arr2
        {
            resultArr.push(arr1[iArr1]);
            iArr1++; // Flyt index til næste element
        } 
        else // Hvis aktuelle element i arr1 er større end aktuelle element i arr2
        {
            resultArr.push(arr2[iArr2]);
            iArr2++; // Flyt index til næste element
        }

        if (visual)
        {
            drawArray2(arr1, undefined, undefined, [0, mStep * 30], 15);
            drawArray2(arr2, undefined, undefined, [250, mStep * 30], 15);
            drawInfo("Merge sort", arrLen, mStep);
    
            await sleep(SPEED);
        }

        mStep++;
    }
    
    resultArr = resultArr.concat(arr1.slice(iArr1)).concat(arr2.slice(iArr2)); // Returnér den sorterede array, og sæt det resterende element fra hvert array ind bagerst

    if (visual)
    {
        drawArray2(resultArr, undefined, undefined, [750, mStep * 30], 15);
        drawInfo("Merge sort", arrLen, mStep);
        
        await sleep(SPEED);
    }
    
    mStep++;

    return resultArr;
}
