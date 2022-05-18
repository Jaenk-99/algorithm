function solution(s) {
    let numbers = s.split(" ")
    let max = -Infinity
    let min = Infinity
    for(let i=0; i<numbers.length; i++){
       let num = Number(numbers[i])
       if(num > max){
           max = num
       }
        if(num < min){
           min = num
       }
    }
    return (`${min} ${max}`)
}