// 여러 함수를 변환함수로 묶기 -> 클래스로 쓰는 걸 더 선호
// 클래스의 get을 사용하면 데이터가 변경되더라도 변경된 데이터를 기반으로 get 하는 시점의 데이터를 기반으로 계산해준다
// 변환함수는 호출하는 시점의 데이터를 기반으로 계산된 데이터가 한번 저장이 되고
// 그 뒤에 데이터가 변경이 되어도 업데이트 되지 않는다
// 원하는 시점의 데이터를 가져오려면 enrichReading을 계속 호출해야 한다
// 데이터가 변경이 되는지 안되는지에 따라서 변환함수를 사용할 수 있는지가 달라진다 -> 그냥 class 쓰는 걸 추천
import _ from "lodash";

const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

// 기본 정보가 필요할 떄는 acquireReading 호출
export function acquireReading() {
  return reading;
}

// 계산된 정보가 필요할 때는 enrichReading 호출
export function enrichReading(original) {
  // const result = { ...original }; // Object.assign : 얕은 복사 , 중첩된 객체가 있을 경우에는 참조 값을 가짐
  const result = _.cloneDeep(original); // lodash 의 깊은 복사 기능
  result.baseChage = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;
}

function calculateBaseCharge(reading) {
  return baseRate(reading.month, reading.year) * reading.quantity;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
