function solution(new_id) {
    let answer = new_id.toLowerCase().replace(/[^\w-._]+/g, "")
    while (answer.indexOf("..") > -1) {
        answer = answer.replace("..", ".")
    }
    while (answer[0] === "." || answer[answer.length - 1] === ".") {
        if (answer[0] === ".") {
            answer = answer.replace(".", "")
        } else if (answer[answer.length - 1] === ".") {
            answer = answer.slice(0, -1)
        }
    }
    if (answer === "") {
        answer = "a"
    }
    if (answer.length > 15) {
        answer = answer.slice(0, 15 - answer.length)
        if (answer[answer.length - 1] === ".") {
            answer = answer.slice(0, -1)
        }
    }
    while (answer.length < 3) {
        answer = answer + answer[answer.length - 1]
    }
    return answer
}
