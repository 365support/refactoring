// 함수안에서 필요한 데이터만 받아오자
// 외부객체에 대한 의존도를 낮추며 함수를 재사용하기 좋다

export function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}
// -->
export function inNewEngland(state) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(state);
}
