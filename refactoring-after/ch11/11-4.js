// 객체 통째로 넘기기

// 함수를 호출 할 때 어느정도 규모의 인자를 전달 할 것인가?
// 실용적 + 의존성 두가지를 고려해서 객체를 통째로 넘길 것인가 아니면 객체의 일부만 넘길 것인가를 결정해야 한다.
// 함수에서 전달 받는 인자가 객체이고 객체안의 인자가 공통적으로 사용된다면 하나씩 쪼개서 주지 말고 같이 넘기자
// 다만 객체안의 두가지만 필요한데 전부를 넘기게 되면 객체에 대한 의존성이 높아져서 위험할 수 있다.
// 같은 폴더 안에 있는 함수라면 의존성이 침해되는 일이 없겠지만 다른 폴더안에 있다면 의존성이 침해될 수 있다.
export function temperatureAlerts(room, plan) {
  const alerts = [];

  if (!plan.withinRange(room.daysTempRange)) {
    alerts.push("room temperature went outside range");
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(range) {
    return (
      range.bottom >= this._temperatureRange.low &&
      range.top <= this._temperatureRange.high
    );
  }
}
