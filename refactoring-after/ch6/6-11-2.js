import fs from "fs";
// 단계 쪼개기
// node script 변환 해보기

// 사용자에게 입력을 받아옴 -> 유효성 검사
// 필요한 로직 처리 -> 단계 분리

// 1. run 함수를 만들어 노드의 process 디펜던시 제거
run(process.argv);

function run(args) {
  countOrders(parseCommand(args));
}

// 2. 사용자에게 입력받아 유효성 검사하는 로직 분리
// 3. 필요한 로직 처리
function countOrders({ fileName, countReadyOnly }) {
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  const filtered = countReadyOnly
    ? orders.filter((order) => order.status === "ready")
    : orders;
  console.log(filtered.length);
}

function parseCommand(args) {
  if (!process.argv[2]) {
    // 바로 process에 접근하면 test 코드를 작성하기 힘들다
    // 인자를 기반으로 데이터를 처리하도록 빼주는게 좋다
    throw new Error("파일 이름을 입력하세요");
  }

  const fileName = `./${process.argv[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error("파일이 존재하지 않습니다");
  }

  return {
    fileName,
    countReadyOnly: args.includes("-r"),
  };
}

// 실행 방법
// nodemon 6 - 11 - 2.js orders // 주문의 총 갯수
// nodemon 6-11-2.js orders -r // 레디중인 갯수
