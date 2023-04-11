function solution(emergency) {
  let answer = [1];
  for (let i = 1; i < emergency.length; i++) {
    answer.push(1);
    for (let j = 0; j < i; j++) {
      if (emergency[j] < emergency[i]) {
        answer[j] += 1;
      }

      if (emergency[j] > emergency[i]) {
        answer[i] += 1;
      }
    }
  }
  return answer;
}
