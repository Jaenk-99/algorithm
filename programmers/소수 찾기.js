// sol1 - 효율성 이슈
function solution(n) {
  let answer = 0;
  if (n >= 2) {
    answer = 1;
  }
  for (let i = 3; i <= n; i++) {
    let temp = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        temp = false;
      }
    }
    if (temp) {
      answer++;
    }
  }
  return answer;
}
