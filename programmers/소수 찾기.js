// sol1 - 효율성 이슈
// function solution(n) {
//   let answer = 0;
//   if (n >= 2) {
//     answer = 1;
//   }
//   for (let i = 3; i <= n; i++) {
//     let temp = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         temp = false;
//       }
//     }
//     if (temp) {
//       answer++;
//     }
//   }
//   return answer;
// }

// sol2
function solution(n) {
  let arr = Array(n + 1).fill(1);
  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      arr[i] = 0;
    } else {
      if (arr[i]) {
        for (let j = 2; j * i <= n + 1; j++) {
          arr[i * j] = 0;
        }
      }
    }
  }
  return arr.reduce((a,b)=>{return a+b})
}
