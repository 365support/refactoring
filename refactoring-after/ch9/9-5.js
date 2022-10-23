// 값을 참조로 바꾸기
// 참조를 값으로 바꿔서 불변성을 유지하게 되면
// 동일한 데이터지만 버전이 여러개가 생긴다
// 여러개의 버전 중 하나를 업데이트 하면 다른 버전은 업데이트 된 정보를 볼 수 없다
// 다른 곳에서도 같이 업데이트가 되어야 한다면 값보다는 참조를 사용하는 것이 좋다

const customerRepository = new CustomerRepository();

const oder = new Order(
  data.number,
  customerRepository.registerCustomer(data.custoerId)
);

class Order {
  // 고객이 주문 후 프로필에 가서 이름을 변경했을 때
  // 주문서를 값으로 사용하게 되면 변경 전 이름을 가지고 있게 된다
  // 값보다는 참조를 사용하자
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;

    // this._customer = new Customer(data.customerId);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
