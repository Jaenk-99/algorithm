function solution(numbers) {
    let answer = 0
    let check = 0
    numbers.sort()
    for(let i=0; i<=9; i++){
        if(numbers[check] === i){
            check++
        }else{
            answer += i
        }
    }return answer
}