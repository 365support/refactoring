// 플래그 인수 제거하기

// 예제 1
// 함수 하나에서 조건을 통해 다르게 동작하도록 하는 함수 
// 두개의 다른 함수로 분리하면 더 좋고 플래그 인수(true, false)는 사용하지 않는 것이 좋다
function setWidth(value) {
  this._width = value;
}

function setHeight(value) {
  this._height = value;
}


// 예제 2
// isPremium으로 함수를 제어하는 것은 좋지 않다 
// isPremium이 true일 때와 false일 때를 각각 함수로 분리하자
class Concert {
  regularBook(customer) {}
  premiumBook(customer) { }
  // 만약에 regularBook 과 premiumBook 사이에 공통적인 로직이 있어서 꼭 필요하다면
  // 그 로직을 추출해서 함수로 만들어서 두 함수 내에서 호출하도록 하자. 외부에서 사용 불가능 하도록
  #book(customer, isPremium) {}
}

// 예제 3
function swtichOn();
function swtichOff();