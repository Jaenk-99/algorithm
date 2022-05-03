// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.
// 데이터
// nationWidth = {
//      'korea': 220877,
//      'Rusia': 17098242,
//      'China': 9596961,
//      'France': 543965,
//      'Japan': 377915,
//      'England' : 242900,
// }
// 출력
// England 22023

nationWidth = {
  korea: 220877,
  Russia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};
let korea = nationWidth.korea;
let nationWidthArray = Object.entries(nationWidth);
console.log(nationWidthArray);
let check = ["", Infinity];
for (let i = 0; i < nationWidthArray.length; i++) {
  if (nationWidthArray[i][0] !== "korea") {
    if (Math.abs(nationWidthArray[i][1] - korea) < check[1]) {
      check[0] = nationWidthArray[i][0];
      check[1] = Math.abs(nationWidthArray[i][1] - korea);
    }
  }
}
console.log(check[0], check[1]);
