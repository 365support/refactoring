// 어서션 추가하기
// 사용자를 위해서 라기 보다는 개발단계에서 개발자가 실수하지 않도록 실수를 알려주는 용도로 사용한다.

import { strict as assert } from "assert";

class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    // 사용자에게 배포한뒤 전달되는 값이 동적으로 결정돼서 0보다 낮은 수가 들어와 어플리케이션이 죽으면 문제가 생긴다
    // 배포할떄는 한단계 더 감싸서 버그리포트만 할 수 있도록 한다
    // 그리고 심각한 부분이라면 assert 대신 number의 기본값을 0으로 설정하던지 다른 처리를 할 수 있도록 하자
    assert(number >= 0);
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

new Customer().applyDiscount(-1);
new Customer().applyDiscount(10);
