// 수정된 값을 반환하기

// 함수 안에 값을 계산하는 함수가 중첩으로 되어있고 계산하는 곳에서 외부의 변수를 업데이트 하고 있음
// 함수는 계산한 값을 return 하도록 하고 함수를 변수에 할당하는 것이 더 좋다
export function ascentVelocity(points, totalMinutes) {
  function calculateAscent() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }
    return result;
  }

  let totalAscent = calculateAscent([{ elevation: 10 }, { elevation: 20 }]);
  return totalAscent / totalMinutes;
}
