// function solution(array, commands) {
//     let answer = [];

//     for (let i = 0; i < commands.length; i++) {
//         let temp = array.slice(commands[i][0] - 1, commands[i][1]);
//         temp.sort(function (a, b) {
//             return a - b;
//         });
//         answer.push(temp[commands[i][2] - 1]);
//     }

//     return answer;
// }

function solution(array, commands) {
    const answer = commands.map((nums) => {
        const result = array.slice(nums[0] - 1, nums[1]).sort((a, b) => {
            return a < b ? -1 : 1;
        });
        return result[nums[2] - 1];
    });

    return answer;
}
