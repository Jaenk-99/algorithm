// function solution(numbers) {
//     var answer = [];
//     for (let i = 0; i < numbers.length - 1; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (!answer.includes(numbers[i] + numbers[j])) {
//                 answer.push(numbers[i] + numbers[j]);
//             }
//         }
//     }
//     return answer.sort(function (a, b) {
//         return a - b;
//     });
// }

//set 사용
function solution(numbers) {
    answer = new Set([])
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.add(numbers[i] + numbers[j])
        }
    }
    return Array.from(answer).sort((a, b) => a - b)
}
