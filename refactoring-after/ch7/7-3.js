// 기본형을 객체로 변환

export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    return "high" === this.priority || "rush" === this.priority;
  }
}

// 만약 Priority로 더 많은 처리를 한다면 class Priority로 따로 빼는 것이 좋다
class Priority {
  #value;
  // 주어진 범위 안의 문자열만 선택할 수 있도록 하기
  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      // 생성자 안에서 에러를 던지는 건 보안에 취약함
      throw new Error(`${value} is invalid for Priority`);
    }
  }

  get index() {
    return Priority.legalValues().indexOf(this.#value);
  }

  equals(other) {
    return this.#index === other.index;
  }

  higherThan(other) {
    return this.#index > other.index;
  }

  // 문자열 정해주기
  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

// filter 하는 로직이 바깥에 있는 것이 문제
// priority가 order 안에 있기 때문에 안으로 들어가는게 좋다
// 만약 Priority로 더 많은 처리를 한다면 class Priority로 따로 빼는 것이 좋다

// const highPriorityCount = orders.filter(
//   (o) => "high" === o.priority || "rush" === o.priority
// ).length;

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
console.log(highPriorityCount);

// 밑의 예제가 이해하기에는 더 쉬울 것 같다
// class Telephone {
//   constructor(number, countryCode)
// }

// const telephone = "010-000-0000";
// const globalTelephone = "+82" + "010-000-0000";
