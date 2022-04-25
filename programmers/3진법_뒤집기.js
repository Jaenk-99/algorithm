function solution(n) {
    let num = n.toString(3) //3진법 string으로 변환
    let answer = ""
    for (let i = num.length - 1; i >= 0; i--) {
        answer += num[i]
    }

    return parseInt(answer, 3) // 10진법으로 변환
}
