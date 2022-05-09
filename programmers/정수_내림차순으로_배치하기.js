//문자 풀이
// function solution(n) {
//     return Number(String(n).split('').sort((a,b)=>{return b-a}).join(''))
// }

// 숫자 풀이
function solution(n) {
    let num = []
    for(let i=0; i<String(n).length; i++){
        num.push(String(n)[i])
    }
    return +(num.sort((a,b)=>{return b-a}).join(''))
}