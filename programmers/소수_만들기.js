function solution(nums) {
    let answer = 0
      for(let i=0; i<nums.length-2; i++){
          for(let j=i+1; j<nums.length-1; j++){
              for(let k=j+1; k<nums.length; k++){
                  let num = nums[i]+nums[j]+nums[k]
                  let check = 1
                  for(let temp = 2; temp < num; temp++){
                    if(num%temp === 0){
                      check = 0
                    }
                  }
                if(check){
                  answer ++
                }
              }
          }
      }
    return answer
  }