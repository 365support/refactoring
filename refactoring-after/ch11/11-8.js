// 생성자를 팩터리 함수로 바꾸기
// 클래스의 생성자를 캡슐화 해서 팩터리 함수로 바꾸기
// 인스턴스를 만드는 로직 자체를 캡슐화 하고 외부에서는 쉽게 사용할 수 있도록 하기 위해서 팩토리 함수 사용

// 클래스를 만들 때 생성자를 호출해서 인스턴스를 만들게 되는데 생성자를 호출하는 방식이 복잡하다면
// 인스턴스를 만드는 로직도 캡슐화 할 수 있다
// 직원을 만들떄 typeCode를 넘겨줘야 한다
export class Employee {
  // js에서는 생성자를 private으로 만들 수 없다
  // private으로 만든다는 가정하에 작성한 코드
  // 복잡한 생성자를 캡슐화 해두고 외부에서는 팩터리 함수를 통해서만 인스턴스를 만들 수 있도록 한다
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesman" };
  }

  static createEngineer(name) {
    return new Employee(name, "E");
  }
  static createSeniorEngineer(name) {
    return new Employee(name, "SE");
  }

  static createMarketer(name) {
    return new Employee(name, "M");
  }
}

const employee = Employee.createEngineer("엘리");
