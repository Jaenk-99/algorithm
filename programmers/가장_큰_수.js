function solution(numbers) {
    let answer = numbers.map((el)=> el+"").sort((a,b) => {return (b+a) - (a+b) }).join('')
    return answer != 0 ? answer : '0'
}