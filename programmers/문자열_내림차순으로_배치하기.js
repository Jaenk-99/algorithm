// function solution(s) {
//     let array = [];
//     let answer = '';
//     for (let i = 0; i < s.length; i++) {
//         array.push(s[i]);
//     }
//     array.sort();

//     for (let j = array.length - 1; j >= 0; j--) {
//         answer += array[j];
//     }
//     return answer;
// }

function solution(s) {
    const answer = s
        .split('')
        .sort((a, b) => {
            return a > b ? -1 : 1;
        })
        .join('');

    return answer;
}
