// 추출한 변수 인라인하기
// 너무 짧고 간결한데 변수로 추출하지 않았는가?

export function isDeliveryFree(anOrder) {
  return anOrder.basePrice > 1000;
}
