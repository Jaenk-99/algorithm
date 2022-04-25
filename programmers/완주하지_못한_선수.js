//시도방법1
// function solution(participant, completion) {
//     let start_runner = participant.sort();
//     let finish_runner = completion.sort();
//     let temp_start_runner = [];

//     for (let i = finish_runner.length - 1; i >= 0; i--) {
//         for (let j = start_runner.length - 1; j >= 0; j--) {
//             if (finish_runner[i] === start_runner[j]) {
//                 start_runner.pop();
//                 finish_runner.pop();
//             } else {
//                 temp_start_runner.push(start_runner[j]);
//                 start_runner.pop();
//             }
//         }
//         start_runner = temp_start_runner.sort();
//         if (temp_start_runner.length !== 1) {
//             temp_start_runner = [];
//         }
//     }

//     return temp_start_runner[0];
// }

//해결
function solution(participant, completion) {
    let start_runner = participant.sort();
    let finish_runner = completion.sort();

    for (let i = 0; i < start_runner.length; i++) {
        if (start_runner[i] != finish_runner[i]) {
            return start_runner[i];
        }
    }
}
