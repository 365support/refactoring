// 질의 함수를 매개변수로 바꾸기

targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정

// 함수 내부적으로 thermostat 객체에 접근하고 있다
// 객체가 전역 변수거나 다른 모듈에 있다면 함수 내부적으로 다른 모듚과 심각하게 커플링 되어있다는 것이다
// 외부 의존성이 필요하다면 함수의 매개변수로 전달받는 것이 좋다

function targetTemperature(plan, currentTemperature) {
  currentTemperature = currentTemperature;
  // ...
}
