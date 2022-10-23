// 필드 이름 바꾸기
// 의도를 나타낼 수 있는 이름을 사용하자

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get title() {
    return this._name;
  }
  set title(value) {
    this._name = value;
  }
  get country() {
    return this._country;
  }
  set country(value) {
    this._country = value;
  }
}
const organization = new Organization({
  name: "support",
  country: "대한민국",
});
