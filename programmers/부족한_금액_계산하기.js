function solution(price, money, count) {
    let allPrice = 0
    for(let i=1;i<=count; i++){
        allPrice += price * i
    }
    if(allPrice < money){
        return 0
    }else{
        return allPrice - money
    }
}