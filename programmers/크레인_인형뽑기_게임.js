function solution(board, moves) {
    let arr = []
    let answer = 0;
        for(let i=0; i<moves.length; i++){
            for(let j=0; j<board.length; j++){
              if(board[j][moves[i]-1]){
                if(arr.length === 0 || arr[arr.length-1] !== board[j][moves[i]-1]){
                  arr.push(board[j][moves[i]-1])
                }else{
                  arr.pop()
                  answer += 2
                }
                board[j][moves[i]-1] = 0
                break
              }
            }
        }
    return answer;
}