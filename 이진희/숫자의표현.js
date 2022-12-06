// 첫번째 시도 : 2중포문을 이용,
// '연속된 자연수'로 만들어야함. 123, 345 이런식 1256 이런건 안됨
// 1부터 시작해서 15가 되는 값을 찾고, 2로넘어가려면 2중포문 사용해야함
// function solution(n) {
//   let answer = 0;
//   for (let i = 1; i <= n; i++) {
//     let sum = 0;
//     for (let a = i; a <= n; a++) {
//       sum += a;
//       if (sum === n) {
//         answer++;
//         sum = 0;
//         break;
//       }
//     }
//   }
//   return answer;
// }
// 왜 인지 모르겠지만, 2중포문을 사용하니 효율성 테스트에서 실패했음.
// 찾아보니 while 사용하면 된다더라
function solution(n) {
  // 답으로 제출할 변수
  let answer = 0;
  let a = 1,
    i = 1,
    sum = 0;
  while (i <= n) {
    sum = sum + a;
    if (sum >= n) {
      if (sum === n) answer++;
      sum = 0;
      i++;
      a = i;
    } else {
      a++;
    }
  }
  return answer;
}

// 그리고 불필요한 console 과 주석마저 없애야 효율성 통과 가능
