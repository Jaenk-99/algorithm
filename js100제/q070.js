// 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
// 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

// 입력
// a = [[1, 2],
// 		[2, 4]]
// b = [[1, 0],
// 		[0, 3]]
// 출력
// [[1, 6], [2, 12]]

function arrayMultiplication(arr1, arr2){
    let answer = []
    if(arr1.length !== arr2.length){
        return -1
    }else{
        for(let i=0; i<arr1.length; i++){
            answer.push([])
            for(let j=0; j<arr1[i].length; j++){
                answer[i].push(arr1[i][j]*arr2[j][j])
            }
        }
    }
    console.log(answer)
}