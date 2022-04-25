// function solution(n) {
//     var answer = 0;
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             answer += i;
//         }
//     }
//     return answer;
// }

//2
function solution(n) {
    let answer = new Array(n).fill(1);
    answer.reduce((cu, el, i) => {
        const num = el + i;
        return n % num === 0 ? cu + num : cu;
    }, 0);
}
