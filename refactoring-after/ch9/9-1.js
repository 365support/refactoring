// 데이터 조직화 (높은 가독성, 유지보수성)
// 데이터가 변할 수 있는지 없는지 심도있게 생각해 봐야함

// 변수 쪼개기
// 임시 변수를 쓰지 말고 의미있는 이름을 부여하자

// 예제 1
// const 를 기본으로 사용하고 변해야 될 경우만 let 사용
const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);

// 예제 2
function distanceTravelled(scenario, time) {
  let result; // 함수에서 반환해야 하는 값을 간직해야 하기 때문에 let 사용
  const primaryAccleration = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  const primaryTime = Math.main(time, scenario.delay);
  result = 0.5 * primaryAccleration * primaryTime * primaryTime; // 전파된 거리
  const secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = primaryAccleration * scenario.delay;
    const secondaryAccleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAccleration * secondaryTime * secondaryTime;
  }
}

// 예제 3
function newDiscount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result -= 2;
  if (quantity > 100) result -= 1;
  return result;
}

function discount(inputValue, quantity) {
  if (inputValue > 50) inputValue = inputValue - 2;
  if (quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}
