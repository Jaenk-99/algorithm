// 1
// function solution(phone_number) {
//     var answer = '';

//     for (let i = 0; i < phone_number.length - 4; i++) {
//         answer = answer + '*';
//     }

//     for (let j = phone_number.length - 4; j < phone_number.length; j++) {
//         answer = answer + phone_number[j];
//     }
//     return answer;
// }

// 2
// function solution(phone_number) {
//     var answer = '';

//     for (let i = 0; i < phone_number.length; i++) {
//         if (i < phone_number.length - 4) {
//             answer += '*';
//         } else {
//             answer += phone_number[i];
//         }
//     }
//     return answer;
// }

// 3
function solution(phone_number) {
    let answer = '';

    answer = answer.padStart(phone_number.length - 4, '*');
    answer += phone_number.slice(phone_number.length - 4, phone_number.length);

    return answer;
}
