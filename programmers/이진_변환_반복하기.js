function solution(s) {
    let count = 0;
    let remove = 0;
    
    while(s !== "1"){
        count++;
        let temp = ""
        for(let i=0; i<s.length; i++){
            if(s[i] === "0"){
                remove++;
                continue;
            }
            temp += s[i]
        }
        s = temp.length;
        s = s.toString(2)
    }
    return[count, remove]
}