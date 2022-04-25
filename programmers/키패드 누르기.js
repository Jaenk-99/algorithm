function solution(numbers, hand) {
  let phone = [
    [1, 4, 7, 10],
    [2, 5, 8, 0],
    [3, 6, 9, 11],
  ];
  let leftPos = [0, 3];
  let rightPos = [2, 3];
  let answer = "";
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < phone.length; j++) {
      if (phone[j].indexOf(numbers[i]) > -1) {
        let tempL =
          Math.abs(leftPos[0] - j) +
          Math.abs(leftPos[1] - phone[j].indexOf(numbers[i]));
        let tempR =
          Math.abs(rightPos[0] - j) +
          Math.abs(rightPos[1] - phone[j].indexOf(numbers[i]));
        if (j === 0) {
          leftPos[0] = 0;
          leftPos[1] = phone[j].indexOf(numbers[i]);
          answer = answer += "L";
        } else if (j === 2) {
          rightPos[0] = 2;
          rightPos[1] = phone[j].indexOf(numbers[i]);
          answer = answer += "R";
        } else if (tempL < tempR) {
          leftPos[0] = j;
          leftPos[1] = phone[j].indexOf(numbers[i]);
          answer = answer += "L";
        } else if (tempL > tempR) {
          rightPos[0] = j;
          rightPos[1] = phone[j].indexOf(numbers[i]);
          answer = answer += "R";
        } else {
          if (hand === "left") {
            leftPos[0] = j;
            leftPos[1] = phone[j].indexOf(numbers[i]);
            answer = answer += "L";
          } else {
            rightPos[0] = j;
            rightPos[1] = phone[j].indexOf(numbers[i]);
            answer = answer += "R";
          }
        }
      }
    }
  }
  return answer;
}
