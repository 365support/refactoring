// 명령을 함수로 바꾸기

// 특정한 데이터와 계산이 프로그램 전반에서 사용된다면 클래스로 묶어 필요한 데이터와 계산하는 함수로 구성한다.
// 한번만 계산이 필요한 일시적인 경우에 클래스로 사용하게 되면 불필요한 비용이 발생한다
// 함수를 한번만 선언해서 계속 호출하는 것과
// 클래스를 선언해서 필요할 떄마다 인스턴스를 생성하고 함수를 호출하는 것은 비용이 다르다

// 데이터를 영원히 기억하고 있을 필요가 없고 일시적으로 주어진 데이터 계산만 해야 한다면 함수 사용하는 것이 좋다
export function charge(customer, usage, provider) {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}
