function solution(n) {
  let i = 2;
  while (n / i >= 1) {
    n = n / i;
    i += 1;
  }
  return i - 1;
}
