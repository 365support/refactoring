// 레코드 캡슐화

// 컬렉션이란?
// 복합적인 데이터를 가지고 있는 것
// 컬랙션은 관련 있는 자료들을 담을 수 있는 자료구조로, 상위 개념
// 컬렉션의 종류에는 배열, 맵, 셋 등이 있다.

class Organization {
  #data;
  #name;
  #country;

  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }

  get rawData() {
    // return { name: this.name, contry: this.contry }; // 얕은복사, cloneDeep -> 바뀐 값 리턴
    return { ...this.#data }; // 얕은복사, cloneDeep -> 원래 값 리턴
  }
}

const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});
// const organization1 = new Organization("Acme Gooseberries", "GB");

organization.name = "support";
console.log(organization.name);
console.log(organization.country);

console.log(organization.rawData);
