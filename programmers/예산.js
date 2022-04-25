function solution(d, budget) {
    const sortD = d.sort((a, b) => a - b)
    let answer = 0
    let sumD = 0
    for (let i = 0; i < sortD.length; i++) {
        sumD += sortD[i]
        if (sumD <= budget) {
            answer++
        }
    }
    return answer
}
