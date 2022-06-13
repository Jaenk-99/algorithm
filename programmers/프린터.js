function solution(priorities, location) {
  let importance = 1;
  let checkPriorities = 9;
  let temp = 0;
  let answer = Array.from(Array(priorities.length), () => 0);

  while (checkPriorities) {
    if (priorities.indexOf(checkPriorities) > -1) {
      if (
        priorities.slice(temp, priorities.length).indexOf(checkPriorities) > -1
      ) {
        answer[
          priorities.slice(temp, priorities.length).indexOf(checkPriorities) +
            priorities.slice(0, temp).length
        ] = importance;

        temp =
          priorities.slice(temp, priorities.length).indexOf(checkPriorities) +
          priorities.slice(0, temp).length;

        priorities[
          priorities.slice(temp, priorities.length).indexOf(checkPriorities) +
            priorities.slice(0, temp).length
        ] = 0;

        importance += 1;
      } else {
        answer[priorities.indexOf(checkPriorities)] = importance;

        temp = priorities.indexOf(checkPriorities);

        priorities[priorities.indexOf(checkPriorities)] = 0;

        importance += 1;
      }
    } else {
      checkPriorities--;
    }
  }

  return answer[location];
}

