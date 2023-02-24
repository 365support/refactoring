// API 리팩터링
// API 란? 잘 설계한 모듈을 외부에서 사용할 수 있도록 노출한 함수들의 집합을 말한다
// 좋은 모듈/클래스는 내부구현 사항은 캡슐화 되어 있어야 하고 외부에서 필요한 것만 노출해 둬야 한다
// -> 외부에서 사용할 필요가 있는 동작으로만 API로 제공해야 한다
// 이해하기 쉽고 사용하기 쉽게 API를 설계해야 한다
// 하나의 일만 하도록, 그 목적이 잘 드러나는 이름으로 짓기
// 단순 조회화 수정하는 동작을 명확하게 분리
// 헷갈리는 방식 지양(복잡한 매개변수들)

// 질의 함수와 변경 함수 분리하기

// 함수를 만들때 첫번쨰로 고려해야 하는 사항은 sideEffect 없이 만드는 것이다
// 한가지 일을 하기로 했는데 예상하지 못한 다른 일도 실행되는 것을 말한다
// 함수는 계산한다 라고 했는데 데이터베이스 업데이트도 하고 서버에 전송도 한다면?

// 예제 1
// 함수에서 하고자 하는 일을 하기 떄문에 sideEffect가 있다고 할 수는 없지만
// 함수가 두가지 일을 하고 있기 떄문에 함수의 이름이 and다

// 함수를 두개로 나눠서 각각의 이름을 명확하게 지어주면 더 좋다
function getTotalOutstanding() {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
  // bill을 보내는 코드
}

// 예제 2
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
}

// 악당을 찾는 로직
function findMiscreant(people) {
  for (const p of people) {
    if (p === "Don") {
      return "Don";
    }
    if (p === "John") {
      return "John";
    }
  }
  return "";
}

// 알람을 보내는 로직
function setOffAlarms(alarm, p) {
  alarm.setOff("Found Miscreant " + p);
}
