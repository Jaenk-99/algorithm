function solution(dartResult) {
  let dart = [];
  let answer = 0;
  let temp = "";
  for (let i = 0; i < dartResult.length; i++) {
    if (!i) {
      temp += dartResult[i];
    } else if (
      i + 1 !== dartResult.length - 1 &&
      isNaN(dartResult[i]) &&
      !isNaN(dartResult[i + 1])
    ) {
      temp += dartResult[i];
      dart.push(temp);
      temp = "";
    } else if (i === dartResult.length - 1) {
      temp += dartResult[i];
      dart.push(temp);
    } else {
      temp += dartResult[i];
    }
  }
  
  for (let i = 0; i < dart.length; i++) {
    let point = 0;
    let num = 0;
    for (let j = 0; j < dart[i].length; j++) {
      if (!isNaN(dart[i][j])) {
        num += dart[i][j];
      }
    }
    if (dart[i].includes("S")) {
      point = Math.pow(num, 1);
    } else if (dart[i].includes("D")) {
      point = Math.pow(num, 2);
    } else {
      point = Math.pow(num, 3);
    }

    if (dart[i].includes("*")) {
      if (i !== dart.length - 1 && dart[i + 1][2] == "*") {
        answer += point * 2 * 2;
      } else {
        answer += point * 2;
      }
    } else if (dart[i].includes("#")) {
      if (i !== dart.length - 1 && dart[i + 1][2] == "*") {
        answer += point * 2 * -1;
      } else {
        answer += point * -1;
      }
    } else if (i !== dart.length - 1 && dart[i + 1][2] == "*") {
      answer += point * 2;
    } else {
      answer += point;
    }
  }
  return answer;
}
