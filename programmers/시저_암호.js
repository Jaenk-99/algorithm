function solution(s, n) {
    const smallAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const bigAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let position = 0
    let answer = ""

    for (let i = 0; i < s.length; i++) {
        if (smallAlphabet.includes(s[i])) {
            position = smallAlphabet.indexOf(s[i]) + n
            if (position >= 26) {
                position = position - 26
            }
            answer += smallAlphabet[position]
        }
        if (bigAlphabet.includes(s[i])) {
            position = bigAlphabet.indexOf(s[i]) + n
            if (position >= 26) {
                position = position - 26
            }
            answer += bigAlphabet[position]
        }
        if (s[i] === " ") {
            answer += " "
        }
    }
    return answer
}
