// 클래스 인라인하기

export class Shipment {
  #shippingCompany;
  #trackingNumber;
  constructor(trackingNumber, shippingCompany) {
    this.#trackingNumber = trackingNumber;
    this.#shippingCompany = shippingCompany;
  }

  get shippingCompany() {
    return this.#shippingCompany;
  }

  set shippingCompany(arg) {
    this.#shippingCompany = arg;
  }

  get trackingNumber() {
    return this.#trackingNumber;
  }

  set trackingNumber(arg) {
    this.#trackingNumber = arg;
  }

  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

const shipment = new Shipment(999, "Maersk");
console.log(shipment.trackingInfo);

shipment.shippingCompany = "COSCO";
console.log(shipment.trackingInfo);

// 단순히 정보를 감싸고 역할이 없고 별도로 처리하는 로직이 없다면 지나치게 세분화 해놓은게 아닌가? 고민해보기
