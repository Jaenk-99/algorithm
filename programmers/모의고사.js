function solution(answers) {
    let test1 = [1, 2, 3, 4, 5]
    let test2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let test3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let correct1 = 0
    let correct2 = 0
    let correct3 = 0
    let maxCorrect = 0
    let answer = []

    for (let i = 0; i < answers.length; i++) {
        if (test1[i % test1.length] === answers[i]) {
            correct1 += 1
            if (maxCorrect < correct1) {
                maxCorrect = correct1
            }
        }

        if (test2[i % test2.length] === answers[i]) {
            correct2 += 1
            if (maxCorrect < correct2) {
                maxCorrect = correct2
            }
        }

        if (test3[i % test3.length] === answers[i]) {
            correct3 += 1
            if (maxCorrect < correct3) {
                maxCorrect = correct3
            }
        }
    }

    if (maxCorrect === correct1) {
        answer.push(1)
    }
    if (maxCorrect === correct2) {
        answer.push(2)
    }
    if (maxCorrect === correct3) {
        answer.push(3)
    }

    return answer
}

// function solution(answers) {
//     let test = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], ]
//     let test2 = [2, 1, 2, 3, 2, 4, 2, 5]
//     let test3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
//     let correct1 = 0
//     let correct2 = 0
//     let correct3 = 0
//     let maxCorrect = 0
//     let answer = []

//     for (let i = 0; i < answers.length; i++) {
//         if (test1[i % test1.length] === answers[i]) {
//             correct1 += 1
//             if (maxCorrect < correct1) {
//                 maxCorrect = correct1
//             }
//         }

//         if (test2[i % test2.length] === answers[i]) {
//             correct2 += 1
//             if (maxCorrect < correct2) {
//                 maxCorrect = correct2
//             }
//         }

//         if (test3[i % test3.length] === answers[i]) {
//             correct3 += 1
//             if (maxCorrect < correct3) {
//                 maxCorrect = correct3
//             }
//         }
//     }

//     if (maxCorrect === correct1) {
//         answer.push(1)
//     }
//     if (maxCorrect === correct2) {
//         answer.push(2)
//     }
//     if (maxCorrect === correct3) {
//         answer.push(3)
//     }

//     return answer
// }
