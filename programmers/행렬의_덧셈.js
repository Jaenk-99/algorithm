// function solution(arr1, arr2) {
//     let answer = [];
//     for (let i = 0; i < arr1.length; i++) {
//         answer.push([]);
//         for (let j = 0; j < arr1[i].length; j++) {
//             answer[i].push(arr1[i][j] + arr2[i][j]);
//         }
//     }
//     return answer;
// }

function solution(arr1, arr2) {
    const answer = arr1.map((num1, i) => {
        return num1.map((num2, j) => {
            return num2 + arr2[i][j]
        })
    })
    return answer
}
