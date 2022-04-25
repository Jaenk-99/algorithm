function solution(num) {
    let answer = 0;
    let number = num;
    while (answer < 500 && number !== 1) {
        number % 2 === 0 ? (number = number / 2) : (number = number * 3 + 1);
        answer++;
    }
    answer === 500 ? (answer = -1) : answer;
    return answer;
}
