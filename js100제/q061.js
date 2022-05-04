// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
// 입력
// aaabbbbcdddd
// 출력
// a3b4c1d4


let str = prompt("문자열을 입력해주세요")
let count = 1
let answer = str[0]
for(let i=1; i<str.length; i++){
  	if(str[i] === answer[answer.length-1]){
      count++
    }else{
      answer = answer + String(count) + str[i]
      count = 1
    }
}
answer = answer + String(count)
console.log(answer)