function getOneCount(num){
    let str = num.toString(2)
    let oneCount = 0
    for(let i=0; i<str.length; i++){
        if(str[i]!=='0') oneCount++
    }
    return oneCount
}

function solution(n) {
    let check = n
    while(true){
        check++
        if(getOneCount(n)===getOneCount(check)) return check
    }
}