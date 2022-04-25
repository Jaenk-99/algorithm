function solution(s) {
    const english = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let check = ""
    let answer = ""

    for (let i = 0; i < s.length; i++) {
        if (!Number(s[i]) && s[i] != 0) {
            check += s[i]
            if (english.includes(check)) {
                answer += english.indexOf(check)
                check = ""
            }
        } else {
            answer += s[i]
        }
    }

    return Number(answer)
}

// function solution(s) {
//     let dec = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
//     let enc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//     let result = s

//     for (let i = 0; i < dec.length; i++) {
//         if (s.includes(dec[i])) {
//             result = result.replaceAll(dec[i], enc[i])
//             console.log(result)
//         }
//     }
//     return Number(result)
// }
