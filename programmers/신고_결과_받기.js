//sol1 시간 초과
function solution(id_list, report, k) {
    let arr = report.filter((a,b)=> report.indexOf(a) === b)
    let temp = Array(id_list.length).fill(0)
    let answer = Array(id_list.length).fill(0)
      for(let i=0; i<arr.length; i++){
        arr[i] = arr[i].split(' ')
        for(let j=0; j<id_list.length; j++){
          if(arr[i][1] === id_list[j]){
            temp[j]++
          }
        }
      }
    for(let i=0; i<arr.length; i++){
      if(temp[id_list.indexOf(arr[i][1])]>=k){
        answer[id_list.indexOf(arr[i][0])]++
      }
    }
    return answer
  }
