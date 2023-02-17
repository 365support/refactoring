// 중첩 조건문을 보호 구문으로 바꾸기
// 쉽게 결과가 도출될 수 있는(함수에서 빨리 나가도록) 간편한 것 부터 앞으로 뺴고 다시 앞으로 넘어오지 않도록 만든다.

export function payAmount(employee) {
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: "SEP" };
  }

  if (employee.isRetired) {
    return { amount: 0, reasonCode: "RET" };
  }

  // 보호구문을 만들고 중요한 로직은 아래로 내려올 수 있도록 한다.

  // lorem.ipsum(dolor.sitAmet);
  // consectetur(adipiscing).elit();
  // sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
  // ut.enim.ad(minim.veniam);
  return someFinalComputation();
}

function someFinalComputation() {
  return { amount: 999, reasonCode: "UNICORN" };
}

// 👎 bad
export function payAmount(employee) {
  if (employee !== null) {
    // 특정한 로직을 많이 처리하는 코드
    if (employee.isSeparated) {
      return { amount: 0, reasonCode: "SEP" };
    }
    if (employee.isRetired) {
      return { amount: 0, reasonCode: "RET" };
    }
  } else {
    return;
  }
}

// 👍 good
// 특정한 조건이 아니라면 빨리 함수에서 나가도록 한다.
export function payAmount(employee) {
  if (employee === null) return;
  // 특정한 로직을 많이 처리하는 코드
}
