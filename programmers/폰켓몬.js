function solution(nums) {
    let myPkmon = [];
    let answer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!myPkmon.includes(nums[i])) {
            myPkmon.push(nums[i]);
        }
    }

    myPkmon.length > nums.length / 2 ? (answer = nums.length / 2) : (answer = myPkmon.length);
    return answer;
}
