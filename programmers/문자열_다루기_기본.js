// function solution(s) {
//     var answer = true;
//     s.length === 4 || s.length === 6
//         ? s.includes('e' || 'x' || 'o' || 'b')
//             ? (answer = false)
//             : isNaN(s)
//             ? (answer = false)
//             : Number(s) === NaN
//             ? (answer = false)
//             : (answer = true)
//         : (answer = false);
//     return answer;
// }

// 2
function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    const answer = s.split('').filter((num) => {
        return isNaN(num);
    });
    return answer.length === 0;
}
