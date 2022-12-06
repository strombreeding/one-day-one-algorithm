// 문제 인식
// n은 자연수 입니다.
// 답은 n 보다 큰 자연수입니다.
// n의 2진수의 0을 모조리 뺀 다음, 1의 개수와 답의 2진수의 0을 뺀 1의 개수가 같은것이 정답

// 우선 n을 2진법으로 고치고, 0을 모조리 뺀 것을 변수에 선언
// 그 후, while 을 사용하여 n+1씩 해주고 그 값에 2진수의 0을 제거한 후, 변수선언

function solution(n) {
  var answer = 0;
  const nToString = n.toString(2).replace(/0/g, "");
  let cnt = 1;
  while (true) {
    const compare = (n + cnt).toString(2).replace(/0/g, "");
    console.log(compare);
    if (nToString === compare) {
      answer = n + cnt;
      break;
    }
    cnt++;
  }
  return answer;
}
console.log(solution(78));
