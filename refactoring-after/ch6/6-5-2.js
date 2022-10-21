export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  // 함수의 매개변수로 isPriority(boolean)을 받아서 true 면 빠른 예약 false 면 일반 예약
  // 추가적인 매개변수를 받아서 다른 동작을 하는 함수를 만드는 것은 좋지 않다
  // 필요하다면 일반 예약을 하던 함수에서는 customer만 전달하고, 기본 값을 false 로 지정해두자
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
