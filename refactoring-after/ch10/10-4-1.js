// 조건부 로직을 다형성으로 바꾸기
// 새의 타입이 추가될 때마다 함수를 수정해야 한다.
// 특정한 객체 타입에 따라서 함수를 수정해야 한다면 유지보수가 쉽도록 객체를 클래스로 만들어서 다형성을 이용하자.

export function plumages(birds) {
  let map = birds.map((b) => [b.name, b.plumage(b)]);
  let map1 = new Map(map);
  return map1;
}
export function speeds(birds) {
  return new Map(birds.map((b) => [b.name, b.airSpeedVelocity]));
}

export function plumage(bird) {
  switch (bird.type) {
    case "EuropeanSwallow":
      return "average";
    case "AfricanSwallow":
      return bird.numberOfCoconuts > 2 ? "tired" : "average";
    case "NorwegianBlueParrot":
      return bird.voltage > 100 ? "scorched" : "beautiful";
    default:
      return "unknown";
  }
}
export function airSpeedVelocity(bird) {
  switch (bird.type) {
    case "EuropeanSwallow":
      return 35;
    case "AfricanSwallow":
      return 40 - 2 * bird.numberOfCoconuts;
    case "NorwegianBlueParrot":
      return bird.isNailed ? 0 : 10 + bird.voltage / 10;
    default:
      return null;
  }
}

class Bird {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get plumage() {
    return "unknown";
  }

  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  constructor() {
    super("EuropeanSwallow");
  }

  get plumage() {
    return "average";
  }

  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  constructor() {
    super("AfricanSwallow");
  }

  get plumage() {
    return this.numberOfCoconuts > 2 ? "tired" : "average";
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor() {
    super("NorwegianBlueParrot");
  }

  get plumage() {
    return this.isNailed ? "scorched" : "beautiful";
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

const result = plumages([
  new NorwegianBlueParrot(),
  new AfricanSwallow(),
  new EuropeanSwallow(),
]);

console.log(result);
