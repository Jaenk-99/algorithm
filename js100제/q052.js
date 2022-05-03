// 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.

// function quickSort(arr){
//     if (arr.length <= 1){
//       return arr;
//     }
  
//     const pivot = arr[0];
//     const left = [];
//     const right = [];
  
//     for (let i=1; i<arr.length; i++){
//       if(/*빈칸을 채워주세요*/){
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//     return /*빈칸을 채워주세요*/
//   }
  
//   const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
//   console.log(quickSort(array));


// 퀵정렬이란 pivot이라는 기준점을 잡고, pivot보다 작은 수는 왼쪽으로, 큰 수는 오른쪽으로 크기를 비교하며 정렬하는 방법
// 아래 설명은 pivot을 배열의 가장 우측을 기준으로 진행한다.
// [70, 20, 50, 10, 30, 40] 에서 pivot을 가장 우측에 있는 40으로 잡을 경우
// [70, 20, 50, 10, 30, 40] 70은 pivot 40보다 크기 때문에 변화 없음
// [20, 70, 50, 10, 30, 40] 20은 pivot 40보다 작기 때문에 이동(0번 인덱스로 이동)
// [20, 70, 50, 10, 30, 40] 50은 pivot 40보다 크기 때문에 변화 없음
// [20, 10, 50, 70, 30, 40] 10은 pivot 40보다 작기 때문에 이동(1번 인덱스로 이동)
// [20, 10, 30, 70, 50, 40] 30은 pivot 40보다 작기 때문에 이동(2번 인덱스로 이동)
// [20, 10, 30, 40, 50, 70] 첫번째 정렬 후 pivot 40을 이동(3번 인덱스로 이동)
// 이후 pivot이였던 40을 기준으로 배열을 나눈 뒤, 나눠진 배열로 퀵 정렬을 진행한다
//[20, 10, 30], [40], [50, 70] 좌측배열 pivot 30, 우측배열 pivot 70 => 변화없음
// [20, 10], [30], [40], [50], [70] 좌측의 남은 배열 1개에 퀵정렬(pivot 10을 기준) 진행
// [10], [20], [30], [40], [50], [70] => [10, 20, 30, 40, 50, 70] 정렬 완료

//이 문제는 pivot을 가장 좌측을 기준으로 잡는다.
function quickSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i=1; i<arr.length; i++){
      if(arr[i]<pivot){
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(quickSort(array));