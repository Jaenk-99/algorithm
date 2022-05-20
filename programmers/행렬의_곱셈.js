function solution(arr1, arr2) {
  let answer = Array(arr1.length);
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = Array(arr2[0].length);
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum = sum + arr1[i][k] * arr2[k][j];
      }
      answer[i][j] = sum;
    }
  }
  return answer;
}
