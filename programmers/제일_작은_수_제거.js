function solution(arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    let minIndex = arr.indexOf(min);
    if (minIndex > -1) {
        arr.splice(minIndex, 1);
    }

    if (arr.length === 0) {
        arr.push(-1);
    }

    return arr;
}
