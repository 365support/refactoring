// 함수 추출하기 (특정한 일을 수행하는 코드의 집합 )
// 프로그램을 이루는 가장 기본적인 단위
// 프로그램을 작은 단위로 나누는 주된 수단

// 1. 코드가 어떤 일을 하는지 파악
// 2. 고유한 일을 하는 코드를 찾아 독립적인 함수로 추출
// 3. 목적에 맞는 이름 짓기
// -> 재사용 가능, 유지보수성, 높은 가독성

export function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutStanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

const printBanner = () => {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
};

const calculateOutStanding = (invoice) => {
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
};

const recordDueDate = () => {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
};

const printDetails = (invoice, outstanding) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
};

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};

printOwing(invoice);

// 리팩토링 전
// 가독성이 떨어지는 함수
// 많은 일을 하기 때문에 주석이 적혀 있음
