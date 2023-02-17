// 등급을 계산할 떄 반복적으로 나타나는 조건문 존재 (중국을 거치는지 역사안에 중국이 있는지 없는지에 따라 계산 로직이 달라짐)
// rating 관련 클래스를 만들어서 여기서 공통으로 관련된 항해와 역사를 가지고 점수를 만들고
// 중국과 관련된 클래스를 만들어서 다른 rating을 계산하도록 만들면 다향성을 극대화 해서 조건문이 반복적으로 나오지 않도록 할 수 있다.
// switch로 타입을 하나씩 검사하는 대신에 다향성을 사용할 수 없을까 고민해보고 다향성보다 위임을 사용하는 것이 나은 경우도 있다.

// 투자 등급
export function rating(voyage, history) {
  if (this.voyage.zone === "china" && history.some((v) => "china" === v.zone)) {
    return new ExperiencedChinaRating(voyage, history).value;
  }
  return new Rating(voyage, history).value;
}

class Rating {
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }

  get value() {
    // 투자 등급
    // 기존 value를 그대로 사용하고 중국과 관련 된 것만 다른 함수로 추출해서 추출된 함수를 오버라이딩 하도록
    const profit = this.voyageProfitFactor;
    const risk = this.voyageRisk;
    const historyRisk = this.captainHistoryRisk;
    return profit * 3 > risk + historyRisk * 2 ? "A" : "B";
  }

  get voyageRisk() {
    // 항해 경로 위험요소
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (["china", "east-indies"].includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    // 선장의 항해 이력 위험 요소
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter((v) => v.profit < 0).length;
    if (this.voyage.zone === "china" && hasChina(this.history)) result -= 2;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    // 수익 요인
    let result = 2;
    if (this.voyage.zone === "china") result += 1;
    if (this.voyage.zone === "east-indies") result += 1;
    result += this.voyageHistoryAndLengthFactor;
    return result;
  }

  get voyageHistoryAndLengthFactor() {
    let result = 0;
    if (this.history.length > 8) result += 1;
    if (this.voyage.length > 14) result -= 1;
    return result;
  }
}

class ExperiencedChinaRating extends Rating {
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }

  get voyageHistoryAndLengthFactor() {
    let result = 3;
    if (this.history.length > 10) result += 1;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }
}

const voyage = { zone: "west-indies", length: 10 };
const history = [
  { zone: "east-indies", profit: 5 },
  { zone: "west-indies", profit: 15 },
  { zone: "china", profit: -2 },
  { zone: "west-africa", profit: 7 },
];

const rate = rating(voyage, history);
console.log(rate);
