function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;

  //카펫의 최소높이는 3부터이다.(위아래 갈색, 가운데가 노란색이기 때문에)
  for (let height = 3; height <= brown; height++) {
    // 나머지가 없어야 최소높이 3을 충족시키는 사각형이 만들어지는 것임
    if (sum % height === 0) {
      // 사각형이 만들어 졌다면 가로길이를 구해야함.
      //가로길이 = 전체개수 / 높이
      // 총 개수가 48개이고, 높이가 3인 사각형의 가로길이는 16 이다.
      let weight = sum / height;
      // 이제 입력받은 노란색의 개수와 만들어진 사각형 안에있는 노란색의 개수를 비교한다.
      // 노란색타일은 갈색 안쪽에 있기때문에 양옆, 위아래에서 1씩 빠진다.
      // 그말은, 가로길이가 16이라면 노랑이는 14인 것이고,
      // 세로길이가 3이라는것은, 노랑이는 1인 것이다.
      // 만약 전체너비 48의 사각형의 높이가 3이라면, 노랑이는 총 14개이기 때문에 아웃임
      if ((height - 2) * (weight - 2) === yellow) {
        return [weight, height];
      }
    }
  }
  return answer;
}
