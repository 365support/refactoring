// 문장 슬라이드하기

// 예제 1
// 코드를 읽어 나갈 때 쉽도록 라인 바꾸기
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;

// 예제 2
// 조건문과 상관 없이 동일한 일을 하는 라인은 공통으로 빼주고
// result 에 할당하는 것이 조건문과 상관 없다면 간편하게 3항 연산자 쓰기
function newSomeFunc() {
  const result =
    availableResources.length === 0
      ? createResource()
      : availableResources.pop();

  allocatedResources.push(result);

  return result;
}

function someFunc() {
  let result;
  if (availableResources.length === 0) {
    result = createResource();
    allocatedResources.push(result);
  } else {
    result = availableResources.pop();
    allocatedResources.push(result);
  }
  return result;
}
