// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.
let str = prompt('문자열을 입력해주세요')
console.log(`${"=".repeat((50-str.length)/2)}${str}${"=".repeat((50-str.length)/2)}`)