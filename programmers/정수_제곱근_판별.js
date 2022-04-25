function solution(n) {
    let answer = 0;
    let num = Math.sqrt(n);
    Number.isInteger(num) ? (answer = Math.pow(num + 1, 2)) : (answer = -1);
    return answer;
}
