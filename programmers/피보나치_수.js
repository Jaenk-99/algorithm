// 1. 재귀함수

// function solution(n) {
//     return fibo(n) % 1234567;

//     function fibo(n) {
//         if (n <= 1) {
//             return n;
//         } else {
//             return fibo(n - 1) + fibo(n - 2);
//         }
//     }
// }

// 2. only for문
function solution(n) {
    let before_result = 0
    let result = 0
    let temp = 0

    for (let i = 1; i <= n; i++) {
        if (i > 1) {
            temp = result
            result = (result + before_result) % 1234567
            before_result = temp
        } else if (i === 1) {
            result = 1
        }
    }

    return result
}
