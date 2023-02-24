// 매개변수를 질의함수로 바꾸기
// 내부 모듈안에서 서로 연관된 데이터와 밀접하게 관련된 행동이 있는 곳에서는 (응집도가 높은 상태)
// 내부적으로 매개변수를 전달받아서 사용하기 보다는
// 서로 데이터에 직접 접근 할 수 있는 질의함수 형태가 좋다

// 질의함수를 매개변수로 바꾸기
// 응집도가 떨어진 외부 모듈에 있는 데이터를 사용할 떄는 바로 외부에 접근하는 것은 좋지 않다
// 필요한 데이터를 외부로부터 전달 받을 수 있도록 매개변수로 전달받는 것이 좋다

// 매개변수를 질의함수로 바꾸기
// 같은 모듈안에 서로 동일한 의존성을 가지고 있는 상태에서 매개변수로 전달하기 보다는 질의 함수로 만들어서 사용하는 것이 좋다
export class Order {
  constructor(quantity, itemPrice) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get finalPrice() {
    return this.discountedPrice();
  }

  get discountLevel() {
    return this.quantity > 100 ? 2 : 1;
  }

  discountedPrice() {
    switch (this.discountLevel) {
      case 1:
        return this.basePrice * 0.95;
      case 2:
        return this.basePrice * 0.9;
    }
  }
}
