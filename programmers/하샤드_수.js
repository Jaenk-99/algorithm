function solution(x) {
    let sum = 0;
    for (let i = 0; i < String(x).length; i++) {
        sum += Number(String(x)[i]);
    }
    let answer = true;
    x % sum === 0 ? (answer = true) : (answer = false);
    return answer;
}
