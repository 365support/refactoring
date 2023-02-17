// 특이 케이스 추가하기
// null을 사용하는 것 대신에 null을 나타낼 수 있는 null 객체나 unknown 객체 , 비워져있는 객체를 이용하면
// 다형성을 이용하거나 비어있을때 특이한 행동을 해야 한다면 추가적인 로직을 담을 수 있어서 좋다

// 새로운 예시 ----
class Hotel {
  constructor() {
    this.rooms = [];
  }

  addRoom(roomNumber) {
    this.rooms[roomNumber] = new Room(roomNumber);
  }

  emptyRooms() {
    // this.rooms[roomNumber] = null;
    this.rooms[roomNumber] = new EmptyRoom(roomNumber);
  }

  cleanRooms() {
    this.rooms.forEach((room) => room.clean());
  }
}

class Room {
  constructor(roomNumber) {}

  clean() {
    console.log(`${this.roomNumber} 방을 청소합니다`);
  }
}

class EmptyRoom extends Room {
  constructor(roomNumber) {}

  clean() {
    console.log(`${this.roomNumber} 방이 비어있어요`);
  }
}

const hotel = new Hotel();
hotel.addRoom(0);
hotel.addRoom(1);
hotel.cleanRooms();
hotel.emptyRooms(1);
hotel.cleanRooms(); // null 값에서 clean을 호출하면 에러가 발생한다.

// -------

export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === "unknown"
      ? new UnknownCustomer()
      : new Customer(this._customer);
  }
}

class UnknownCustomer extends Customer {
  get name() {
    return "occupant";
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // 더 많은 코드가 여기에 있음

  customerName = aCustomer.name;
  return customerName;
}
