// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

let nums = prompt("10개의 숫자를 입력해주세요").split(" ")
console.log(Math.max(...nums))
