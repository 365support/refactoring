// 여러 함수를 클래스로 묶기
// 6.9 에서 선언한 함수를 6-9-client1, 6-9-client2, 6-9-client3 에서 사용 중
// 데이터와 데이터를 사용하는 곳이 여기저기 있고 어떤 누구도 정확한 책임을 지고 있지 않다

// 필요한 데이터와 관련 함수를 하나로 묶어 클래스로 만들고 캡슐화 해보자

export class Reading {
  #customer;
  #quantity;
  #month;
  #year;
  constructor(data) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }
  get customer() {
    return this.#customer;
  }
  get quantity() {
    return this.#quantity;
  }
  get month() {
    return this.#month;
  }
  get year() {
    return this.#year;
  }
  // 데이터와 밀접한 관련이 있는 계산이므로 안으로 들어가는게 좋음
  get baseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }

  get baseCharge() {
    return this.baseRate * this.quantity;
  }

  get taxThreshold() {
    this.year;
    return 0.1;
  }

  get taxableCharge() {
    return Math.max(0, this.baseRate - this.taxThreshold);
  }
}

const reading = new Reading({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

export function acquireReading() {
  return reading;
}
