function solution(s) {
  let answer = 0;
  let array = s.split(" ");

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== "Z") {
      answer += Number(array[i]);
    } else {
      answer -= Number(array[i - 1]);
    }
  }

  return answer;
}
