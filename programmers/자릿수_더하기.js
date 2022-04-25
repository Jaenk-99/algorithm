//1
// function solution(n) {
//     let answer = 0;
//     n = String(n);
//     for (let i = 0; i < n.length; i++) {
//         answer += Number(n[i]);
//         console.log(answer);
//     }
//     return answer;
// }

//2
function solution(n) {
    let answer = String(n)
        .split('')
        .reduce((cu, el) => {
            return Number(cu) + Number(el);
        });

    return answer;
}
