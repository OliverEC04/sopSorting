async function bubbleSort(array, visual)
{
    let startTime = window.performance.now(); // Bestem starttidspunkt
    let step = 0;
    let arrLen = array.length;
    let arrayOld;

    // Kører igennem listen n gange
    for (let i = 0; i < arrLen; i++)
    {
        arrayOld = [...array];

        // Kører igennem listen n - i - 1 gange (i er beskrevet i analysen)
        for (let j = 0; j < arrLen - i - 1; j++)
        {
            let a = array[j];
            let b = array[j + 1];

            if (compare(a, b))
            {
                array[j] = b;
                array[j + 1] = a;
            }

            if (visual)
            {
                clear();
                drawArray(array, [j, j + 1], [[240, 0, 0], [240, 0, 0]]);
                drawInfo("Bubble sort", arrLen, step);
    
                await sleep(SPEED);
            }
            step++;
        }

        // Hvis nuværende liste, og listen før er ens, stopper sorteringen
        if (arrayEqual(array, arrayOld))
        {
            break;
        }
    }

    let endTime = window.performance.now(); // Bestemmer sluttidspunkt

    // Visuelt
    clear();
    drawArray(array);
    drawInfo("Bubble sort", arrLen, step, endTime - startTime);

    return [array, [step, endTime - startTime]];
}