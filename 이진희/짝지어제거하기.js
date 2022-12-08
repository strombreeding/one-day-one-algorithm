function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
  }
  return stack.length ? 0 : 1;
}

// while 을 사용할 수도 있다.
function solution(s) {
  const stack = [];
  let index = 0;
  while (s.length > index) {
    if (stack.length === 0 || stack[stack.length - 1] !== s[index]) stack.push(s[index]);
    else stack.pop();
    index++;
  }
  return stack.length ? 0 : 1;
}
console.log(solution("baabaa"));

// function solution(str) {
//   let index = 0;
//   for (let index = 0; index < str.length; index++) {
//     if (str[index + 1] === str[index]) {
//       str = str.replace(`${str[index]}${str[index + 1]}`, "");
//       index = -1;
//     }
//   }
//   while (true) {
//     if (str[index + 1] === str[index]) {
//       str = str.replace(`${str[index]}${str[index + 1]}`, "");
//       index = 0;
//     } else {
//       index += 1;
//     }

//     if (index >= str.length) break;
//   }
//   return str.length === 0 ? 1 : 0;
// }
// function solution(str) {
//   // let index = 0;
//   let strLength = str.length;
//   for (let i = 0; i < str.length; i++) {
//     const all = `${str[i]}${str[i]}`;
//     const regex = new RegExp(`${all}`, "g");
//     str = str.replace(regex, "");
//   }
//   for (let index = 0; index < strLength; index++) {
//     if (str[index + 1] === str[index]) {
//       str = str.replace(`${str[index]}${str[index + 1]}`, "");
//       index = -1;
//       strLength -= 2;
//       // strLength = str.length;
//     }
//   }
//   if (str.length === 0) {
//     return 1;
//   }
//   return 0;
// }
console.log("결과 ", solution("baabaa"));

// function solution(s) {
//   while (true) {}
//   s = solution(s);
//   return s;
// }
// console.log(solution("baabaa"));
// 현재 문자열을 집어넣으면 가장먼저 중복된 문자열을 지우고 반환해주는 함수
