function solution(s) {
    let answer = '';
    let num = Math.floor(s.length / 2);
    s.length % 2 === 0 ? (answer += s.slice(num - 1, num + 1)) : (answer = s[num]);
    return answer;
}
