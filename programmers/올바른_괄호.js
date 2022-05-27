function solution(s){
    let check = []
    
    for(let i=0; i<s.length; i++){
        if(s[i] === "("){
            check.push("(")
        }else if(!check.length){
            return false
        }else{
            check.pop()
        }
    }

    return !check.length ? true : false
}