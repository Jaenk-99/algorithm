// function solution(a, b) {
//     let num = [a, b]
//     let answer = 0
//     num.sort((a, b) => a - b)
//     if (num[0] === num[1]) {
//         return num[0]
//     } else {
//         for (let i = num[0]; i <= num[1]; i++) {
//             answer += i
//         }
//         return answer
//     }
// }

function solution(a, b) {
    let answer = 0
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        answer += i
    }
    return answer
}
