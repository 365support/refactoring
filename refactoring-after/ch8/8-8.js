// 반복문을 파이프라인으로 바꾸기

// 반복문을 돌며 첫번째 라인을 제외하고
// 라인이 비어있다면 제외하고
// 한줄에 들어있던 데이터를 , 단위로 나눠 배열의 첫번째가 India 라면
// 도시와 전화번호 추출하기

export function acquireData(input) {
  // 함수형 api를 이용해서 직관적이고 단계적으로 따라가기 좋게 만들어보기
  return input
    .split("\n")
    .splice(1)
    .filter((line) => line.trim() !== "")
    .map((line) => line.split(","))
    .filter((line) => line[1].trim() === "India")
    .map((line) => ({
      city: line[0].trim(),
      phone: line[2].trim(),
    }));

  // 절차지향적으로 중첩 for을 돌지 말고 파이프 라인으로 바꿔보자
  const lines = input.split("\n");
  let firstLine = true;
  const result = [];
  for (const line of lines) {
    if (firstLine) {
      firstLine = false;
      continue;
    }
    if (line.trim() === "") continue;
    const record = line.split(",");
    if (record[1].trim() === "India") {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }
  return result;
}

// 죽은 코드 제거하기
// test 코드가 있어서 input 을 놔둘 필요가 없다면
// git 과 같은 버전 관리 시스템이 잘 되어 있기 때문에
// github에서 코드를 찾을 수 있으므로 주석으로 지저분하게 남겨놓지 말고 삭제하기

const input = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766`;
const result = acquireData(input);
console.log(result);
