function solution(n, lost, reserve) {
    let answer = n - lost.length
    let lost1 = lost.sort((a, b) => {
        return a - b
    })
    let reserve1 = reserve.sort((a, b) => {
        return a - b
    })
    for (let i = 0; i < lost1.length; i++) {
        if (reserve1.includes(lost1[i])) {
            answer += 1
            reserve1.splice(reserve1.indexOf(lost1[i]), 1)
            lost1.splice(lost1.indexOf(lost1[i]), 1)
            i--
        }
    }

    for (let i = 0; i < lost1.length; i++) {
        if (reserve1.includes(lost1[i] - 1)) {
            answer += 1
            reserve1.splice(reserve1.indexOf(lost1[i] - 1), 1)
        } else if (reserve1.includes(lost1[i] + 1)) {
            answer += 1
            reserve1.splice(reserve1.indexOf(lost1[i] + 1), 1)
        }
    }
    return answer
}
