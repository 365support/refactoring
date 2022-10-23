// 파생 변수를 질의 함수로 바꾸기

// 예제 1
// 변할 수 있는 것을 담고 있는 클래스라면
// 데이터 하나가 변경이 되었을 때 다른 변수의 계산에 영향을 미친다면
// 수동적으로 업데이트 하지 말고 필요한 경우에 실시간으로 계산 할 수 있도록
// 질의 함수로 만드는 것이 좋다 (연산을 통해 값을 계산해서 반환하는 함수)
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    // discountedTotal이 계산된 값을 담고 있기 때문에 발생하는 문제
    // discountedTotal을 get 할 때 계산을 해주면 문제 해결
    return this._discountedTotal;
  }
  set discount(value) {
    const old = this._discount;
    // discount를 업데이트 했을 뿐인데 다른 필드도 함께 업데이트 되고 있다
    this._discount = value;
    this._discountedTotal += old - value;
  }
}

class NewOrder {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._basePrice - this._discount;
  }
  set discount(value) {
    this._discount = value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this._production.reduce((sum, a) => sum + a.amount, 0);
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
