// 풀이 1
// function solution(n, m) {
//     let ndivisor = [];
//     let mdivisor = [];
//     let sameDivisor = 0;
//     let multiple = 1;

//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             ndivisor.push(i);
//         }
//     }

//     for (let j = 1; j <= m; j++) {
//         if (m % j === 0) {
//             mdivisor.push(j);
//         }
//     }

//     for (let k = 0; k < ndivisor.length; k++) {
//         for (let l = 0; l < mdivisor.length; l++) {
//             if (ndivisor[k] === mdivisor[l] && ndivisor[k] > sameDivisor) {
//                 sameDivisor = ndivisor[k];
//             }
//         }
//     }

//     while (true) {
//         if (multiple % n === 0 && multiple % m === 0) {
//             break;
//         }
//         multiple++;
//     }

//     let answer = [sameDivisor, multiple];

//     return answer;
// }

//풀이 2
// function solution(n, m) {
//     let divisor = 0
//     let multiple = 0

//     for (let i = 1; i <= Math.max(n, m); i++) {
//         if (n % i === 0 && m % i === 0) {
//             divisor = i
//         }
//     }
//     for (let i = Math.max(n, m); i <= n * m; i += Math.max(n, m)) {
//         if (i % Math.min(n, m) === 0) {
//             multiple = i
//             break
//         }
//     }

//     return [divisor, multiple]
// }

// 풀이 3
// 유클리드 호제법 (최대공약수를 구하기 위한 알고리즘 공식)
// 큰 수를 작은 수로 나눴을 때, 나머지 값이 0이 되면, 나눴던 작은 수가 최대공약수가 된다.
// 만약에 0이 되지 않는다면, 작은 수가 큰수가 되고, 나머지 값이 작은 수가 된다.
// 이걸 계속 반복

// 최소 공배수 = 두 수의 곱한 값에 최대공약수를 나누면 최소 공배수가 된다
function solution(n, m) {
    let a = m //큰 수
    let b = n //작은 수
    let r = 0 //a를 b로 나눈 나머지 값
    while (a % b > 0) {
        r = a % b
        a = b
        b = r
    }
    return [b, (n * m) / b]
}
