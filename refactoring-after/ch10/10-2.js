// 조건식 통합하기
// 특정한 조건에 해당하면 동일 코드가 수행됨
// 조건을 묶어서 하나로 합한 다음 표현식으로 변경
function disabilityAmount(employee) {
  if (isNotEligibleForDisability(employee)) {
    return 0;
  }
  return 1;
}

function isNotEligibleForDisability() {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  );
}
