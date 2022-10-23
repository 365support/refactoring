// 인라인 코드를 함수 호출로 바꾸기

let appliesToMass = false;
for (const s of states) {
  if (s === "MA") appliesToMass = true;
}

// 절차지향적으로 사용되는 코드가 있다면 대신 할 수 있는
// 간편한 라이브러리, 함수, 배열 api가 있는지 확인하기
let newAppliesToMass = states.indludes("MA");

// 같이 일하기 좋은 개발자
// 사용하는 툴을 잘 사용하는 개발자 -> 단축키 익스텐션
// 플랫폼, 라이브러리를 사용할 때 -> 함수나 api 를 많이,잘 아는 것
