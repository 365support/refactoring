// 매개변수 객체 만들기
// 매개변수는 최대 3개를 넘지 않는 것이 좋다
// 많은 인자를 받아야 한다면 자료구조나 클래스 등으로 연관있는 데이터 구조 하나로 묶어주자

// 방법 1
export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.constains(r.temp));
}

export class NumberRange {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }
  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  constains(number) {
    return number >= this.#min && number <= this.#max;
  }
}

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};
const operationPlan = new NumberRange(51, 53);
const result = readingsOutsideRange(station, operationPlan);

console.log(result);

// 방법 2
// 매개변수 전체를 한번에 넘겨주고 그 안에서 필요한 것을 사용하기
// export function readingsOutsideRange(station, range) {
//   return station.readings.filter(
//     (r) => r.temp < range.temperatureFloor || r.temp > temperatureCeiling
//   );
// }

// const station = {
//   name: "ZB1",
//   readings: [
//     { temp: 47, time: "2016-11-10 09:10" },
//     { temp: 53, time: "2016-11-10 09:20" },
//     { temp: 58, time: "2016-11-10 09:30" },
//     { temp: 53, time: "2016-11-10 09:40" },
//     { temp: 51, time: "2016-11-10 09:50" },
//   ],
// };
// const operationPlan = {
//   temperatureFloor: 51,
//   temperatureCeiling: 53,
// };

// const result = readingsOutsideRange(station, operationPlan);

// console.log(result);
