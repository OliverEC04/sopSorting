/*
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
        let oldData = this.data;
        let newData = this.data;

        for (let i = 1; run; i++) // O(n^2)
        {
            oldData = [...newData];
            newData = this.oneSort(newData);
            run = !arrayEqual(oldData, newData);

            this.steps++;
        }

        clog(this.steps + " steps");

        return newData;
    }

    oneSort(array)
    {
        let data = [...array];

        for (let i = 0; i < this.n - 1; i++) // O(n)
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
*/

async function bubbleSort(array, visual)
{
    let startTime = window.performance.now();
    let step = 0;
    let arrLen = array.length;
    let arrayOld;

    for (let i = 0; i < arrLen; i++)
    {
        arrayOld = [...array];

        for (let j = 0; j < arrLen - i - 1; j++)
        {
            let a = array[j];
            let b = array[j + 1];

            if (compare(a, b)) //remake
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

        if (arrayEqual(array, arrayOld))
        {
            break;
        }
    }

    let endTime = window.performance.now();

    clear();
    drawArray(array);
    drawInfo("Bubble sort", arrLen, step, endTime - startTime);

    return [array, [step, endTime - startTime]];
}