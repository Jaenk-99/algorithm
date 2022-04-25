function solution(s) {
    let str = s.split(' ');
    let answer = '';

    for (let i = 0; i < str.length; i++) {
        let temp = '';
        for (let j = 0; j < str[i].length; j++) {
            if (j % 2 === 0) {
                temp += str[i][j].toUpperCase();
            } else {
                temp += str[i][j].toLowerCase();
            }
        }
        if (i === str.length - 1) {
            answer += `${temp}`;
        } else {
            answer += `${temp} `;
        }
    }

    return answer;
}
