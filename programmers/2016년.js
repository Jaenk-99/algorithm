function solution(a, b) {
    let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
    let temp = 0

    for (let i = 0; i < a; i++) {
        temp += month[i]
    }

    let answer = day[(temp + b) % 7]

    return answer
}

// function solution(a, b) {
//     const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
//     const answer = new Date(2016, a - 1, b).getDay()
//     return week[answer]
// }
