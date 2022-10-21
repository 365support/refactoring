export function priceOrder(product, quantity, shippingMethod) {
  // 기본 제품 가격
  const basePrice = product.basePrice * quantity;

  // 할인 가격
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;

  // 개별 배송비 계산
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  // 총 배송비 계산
  const shippingCost = quantity * shippingPerCase;

  // 총 가격 계산
  const price = basePrice - discount + shippingCost;
  return price;
}

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
