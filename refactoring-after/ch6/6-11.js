// 함수 단계 쪼개기 -> class Order 로 만드는 것 추천 6-9
// 코드를 읽어가며 비슷한 일을 하는 것 끼리 함수로 나누기
// 작은 단위의 함수로 목적에 맞게 나누기

export function priceOrder(product, quantity, shippingMethod) {
  // 기본 제품 가격
  const basePrice = product.basePrice * quantity;
  // 할인 가격
  const discount = calculateDiscountedPrice(product, quantity);

  // 배송비 게산
  const shippingCost = calculateShippingCost(
    basePrice,
    quantity,
    shippingMethod
  );

  // 총 가격 계산
  return basePrice - discount + shippingCost;
}

// 반복적으로 basePrice 가 필요하면 쪼개고 아니면 함수 인라인 하자
const calculateBasePrice = (product, quantity) => {
  return product.basePrice * quantity;
};

const calculateDiscountedPrice = (product, quantity) => {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
};

const calculateShippingCost = (basePrice, quantity, shippingMethod) => {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  // 총 배송비 계산
  return quantity * shippingPerCase;
};

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
