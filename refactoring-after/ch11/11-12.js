// 오류코드를 예외로 바꾸기

// 코드상에서 알 수 없는 상수 -23 이 나온다면 무슨 의미인지 알 수 없다.
// 상수에 이름을 부여해주는 것이 좋다
function localShippingRules(data) {
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
}

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super();
    this.errorCode = errorCode;
  }
}
try {
  const result = localShippingRules();
} catch (error) {
  if (error instanceof OrderProcessingError) {
    console.log(error);
  }
}
