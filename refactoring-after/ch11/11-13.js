//  예외를 사전확인으로 바꾸기

// try catch 문은 예상하지 못하는 에러가(통신실패, 파일이 없는경우) 발생해 웹이 멈추는 것을 방지하기 위해 사용한다
// 예상할 수 있는 나쁜 케이스를 처리하는 것에는 사용하지 않는다
// 예상되는 상황에 맞게 작성을 해주면 된다

// 배열의 값이 없거나 맞지 않을 경우는 미리 예상할 수 있다
const values = [];
function getValueForPeriod(periodNumber) {
  return values[periodNumber] ?? 0;
}

getValueForPeriod(-10);
