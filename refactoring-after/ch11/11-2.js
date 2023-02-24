// 함수 매개변수화하기

// 예제 1
// 연봉을 올려주는건 같지만 얼마나 올려주는지가 다르다
// 비슷한 로직을 반복하는 함수가 있다면 매개변수로 받아오고 합치자
function salaryRaise(person, factor) {
  person.salary = person.salary.multiply(1 + factor);
}

// 예제 2
// 로직이 완전히 동일한게 아니라 유사해서 추출하기가 까다롭다
export function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount =
    withinBand(usage, 0, 100) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
}

function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function usd(value) {
  return {
    currency: "$",
    currencyName: "USD",
    value: value,
  };
}
