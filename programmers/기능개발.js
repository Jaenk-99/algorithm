function solution(progresses, speeds) {
    let answer = []
    let work = []
    for(let i = 0; i<progresses.length; i++){
        work[i] = Math.ceil((100-progresses[i])/speeds[i])
    }
    
    let day = 0
    let check = work[0]
    for(let i=1; i<work.length; i++){
        day ++
        if(work[i] > check){
            answer.push(day)
            day = 0
            check = work[i]
        }
    }
    answer.push(day+1)
    return answer
}