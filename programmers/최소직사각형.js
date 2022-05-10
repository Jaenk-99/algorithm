function solution(sizes) {
    let arr = []
    let answer = [0, 0]
    for(let i=0; i<sizes.length; i++){
        if(sizes[i][0]<sizes[i][1]){
            arr.push([sizes[i][0], sizes[i][1]])
        }else{
            arr.push([sizes[i][1], sizes[i][0]])
        }
    }
    
    for(let i=0; i<arr.length; i++){
        if(arr[i][0] > answer[0]){
            answer[0] = arr[i][0]
        }
        if(arr[i][1] > answer[1]){
            answer[1] = arr[i][1]
        }
    }
    return answer[0] * answer[1]
}