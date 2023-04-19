function solution(num_list, n) {
  let answer = [];
  let check = 0;
  for (let i = 0; i < num_list.length; i) {
    answer.push([]);
    for (let j = 1; j <= n; j++) {
      answer[check].push(num_list[i]);
      i++;
    }
    check++;
  }
  return answer;
}
