// 추출한 함수 인라인하기
// 너무 잘게 나누지 않았는가?

// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 이런식으로 다른 함수에서 재사용이 가능하다면 따로 추출할 이유가 있지만
// num을 고정해놓고 사용할 것이라면 의미가 없다.
function isBestDriver(dvr, num) {
  return dvr.numberOfLateDeliveries > num;
}

// 예제 2
// 불필요한 간접호출 줄이기
function reportLines(customer) {
  const result = [];
  result.push(["name", customer.name]);
  result.push(["location", customer.location]);
  return result;
}
