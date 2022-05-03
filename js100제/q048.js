// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// 입출력
// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

let str = prompt("문자를 입력해주세요")
let answer=""
for(let i=0;i<str.length;i++){
    if(str[i] === str[i].toUpperCase()){
        answer += str[i].toLowerCase()
    }else{
        answer += str[i].toUpperCase()
    }
}
console.log(answer)
