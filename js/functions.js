function clog(value) // console.log value as string
{
    console.log(JSON.stringify(value));
}

function str(value) // shortcut for JSON.stringify()
{
    return JSON.stringify(value);
}

function arrayEqual(a, b) // Check if two arrays are equal
{
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i)
    {
        if (a[i] !== b[i]) return false;
    }

    return true;
}

function makeArray(length, maxVal) // Create array with length and maximum value of array items
{
    let array = [];

    for (let i = 0; i < length; i++)
    {
        array[i] = Math.floor(Math.random() * maxVal);
    }

    return array;
}