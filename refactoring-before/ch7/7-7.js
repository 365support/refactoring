class Person {
  #name;
  #department;
  constructor(name, department) {
    this.#name = name;
    this.#department = department;
  }

  get name() {
    return this.#name;
  }

  get manager() {
    return this.#department.manager;
  }

  get chargeCode() {
    return this.#department.chargeCode;
  }

  get department() {
    return this.#department;
  }

  set department(arg) {
    this.#department = arg;
  }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}

const person = new Person("Tom", new Department("aManager", "999"));
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);

// console.log(person.department.chargeCode);
// -> 이렇게 외부에서 내부 사항을 신경쓰지 않고 바로 사용할 수 있게 하는 것이 좋음
// console.log(person.chargeCode);

// 사용 관점 , 내부적으로 사용하고 있는 코드를 지나치게 노출한 경우
// person 안에 department가 있다는 것을 노출
// department에서 어떻게 접근해야 되는지도 외부에서 사용하는 것에 맡겨둠
