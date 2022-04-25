function solution(N, stages) {
    let clearCount = stages.length
    let failArray = []
    let array = []
    for (let i = 1; i <= N; i++) {
        let fail = {}
        let count = 0
        for (let j = 0; j < stages.length; j++) {
            if (i === stages[j]) {
                count++
            }
        }
        fail.index = i
        fail.value = count / clearCount
        failArray.push(fail)
        clearCount = clearCount - count
    }
    failArray.sort((a, b) => b.value - a.value)
    for (let k = 0; k < failArray.length; k++) {
        array.push(failArray[k].index)
    }
    return array
}
