// 변수 캡슐화 하기
// 불변성
// defaultOwner를 내부에서만 사용할 수 있도록 하고 getDefaultOwner함수만 export 함으로
// 외부에서는 getDefaultOwner 로만 값을 가져올 수 있고 업데이트 할 수 없다.
// 하지만 defaultOwner 객체는 참조값이기 때문에 속성 업데이트가 가능
// 1. 새로운 객체를 복사해서 반환해주기 (얕은 복사, 중첩된 객체가 없을 때는 괜찮다 )
// 2. class 만들기

// 방법2
export class Person {
  #lastName;
  #firstName;
  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get firstName() {
    return this.#firstName;
  }
}

let defaultOwner = new Person({ firstName: "마틴", lastName: "파울러" });

export function getDefaultOwner() {
  return defaultOwner;
}

const owner = getDefaultOwner();
owner.firstName = "support";
// TypeError: Cannot set property firstName of #<Person> which has only a getter
console.log(owner);
console.log(getDefaultOwner());

// 방법1
// let defaultOwner = { firstName: "마틴", lastName: "파울러" };

// export function getDefaultOwner() {
//    return { ...defaultOwner };
// }
