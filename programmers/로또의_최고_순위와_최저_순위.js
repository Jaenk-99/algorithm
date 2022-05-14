function solution(lottos, win_nums) {
    let zero = 0
    let rank = 7
    for(let i=0; i<lottos.length; i++){
        if(lottos[i]===0){
            zero++
        }else if(win_nums.includes(lottos[i])){
            rank--
        }
    }
    return [rank-zero <= 6 ? rank-zero : 6, rank <= 6 ? rank : 6]
}