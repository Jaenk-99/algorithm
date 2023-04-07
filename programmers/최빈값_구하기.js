function solution(array) {
  if (array.length === 1) return array[0];

  let count = 1;
  let target = 0;
  let log = [0];

  array = array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      count++;
    } else {
      if (log[0] < count) {
        target = array[i];
        log = [count];
      } else if (log[0] === count) {
        log.push(count);
      }
      count = 1;
    }
  }

  if (log.length !== 1) {
    return -1;
  } else return target;
}
