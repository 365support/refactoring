// 조건들을 함수로 뺴서 이름을 붙여서 의도를 드러내자
export function adjustedCapital(instrument) {
  let result = 0;
  if (isEligibleForAdjustedCapital(instrument)) {
    result =
      (instrument.income / instrument.duration) * anInstrument.adjustmentFactor;
  }
}
return result;

// 굳이 아닐떄는 빨리 나가도록 0을 리턴 후 함수를 끝내도록 한다.
export function adjustedCapital(instrument) {
  if (!isEligibleForAdjustedCapital(instrument)) {
    return 0;
  }
  return (
    (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
  );
}

function isEligibleForAdjustedCapital(instrument) {
  return (
    instrument.type === "EQUIPMENT" ||
    instrument.type === "INSTRUMENT" ||
    instrument.type === "LAND"
  );
}
