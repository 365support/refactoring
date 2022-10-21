// 중재자 제거하기
// 역할이나 로직이 있는지 보고 그냥 넘겨주는 형태라면 합치자

class Person {
  #name;
  #manager;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  get manager() {
    return this.#manager;
  }

  get chargeCode() {
    return this.#chargeCode;
  }
}

const person = new Person("Tom", "aManager", "999");
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
