function solution(numer1, denom1, numer2, denom2) {
  let answer = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
  let num = 1;
  for (let i = 2; i <= answer[1]; i++) {
    if (answer[0] % i === 0 && answer[1] % i === 0) {
      num = i;
    }
  }
  return [answer[0] / num, answer[1] / num];
}
