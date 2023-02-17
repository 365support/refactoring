// 조건부 로직 간소화
// 코드의 의도(목적)을 나타내도록 하자 - what 보다는 how
// 함수나 표현식에 이름 지어주기

// 조건문 분해하기
// 어떤 것을 계산하는지 ,어떤 로직에 의거해서 계산하는지 코드를 다 읽어봐야 한다.
// 주어진 날짜가 여름이라면 여름 요금을 적용하고, 아니라면 일반 요금을 적용한다.

// 조건 표현식에서 더블 부정문을 쓰게되면 복잡해진다
// 표현식을 변수로 추출하거나 질의 함수로 추출해서 의미있는 이름을 지어주자.
function calculateCharge(date, quantity, plan) {
  return isSummer() ? summerCharge() : regularCharge();

  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
