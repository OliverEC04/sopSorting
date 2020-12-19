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
