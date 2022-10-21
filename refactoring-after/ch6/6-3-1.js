// 변수 추출하기
// 값을 저장하는 공간
// 자료를 저장할 수 있는 이름이 주어진 기억 장소
// -> 저장된 값을 잘 나타낼 수 있는 의미 있는 이름 필요 (구체적일 수록 좋다)

// 긴 표현식이 있다면 단계별로 추출해서 변수화 해보자
export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.1, 100);

  return basePrice - discount + shipping;
}
