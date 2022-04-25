function solution(arr, divisor) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] % divisor === 0 ? answer.push(arr[i]) : answer;
    }
    answer.length === 0 ? answer.push(-1) : answer;
    return answer.sort(function (a, b) {
        return a - b;
    });
}
