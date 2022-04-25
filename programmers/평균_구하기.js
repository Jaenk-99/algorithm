// function solution(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     let answer = sum / arr.length;
//     return answer;
// }

//reduce 이용
function solution(arr) {
    const sum =
        arr.reduce((cu, el) => {
            // cu : current - 누적된 값
            // el : element - 배열의 각각의 요소

            return cu + el;
        }) / arr.length;
    return sum;
}
