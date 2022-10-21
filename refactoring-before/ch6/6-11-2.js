import fs from "fs";

if (!process.argv[2]) {
  throw new Error("파일 이름을 입력하세요");
}

const fileName = `./${process.argv[2]}.json`;
if (!fs.existsSync(fileName)) {
  throw new Error("파일이 존재하지 않습니다");
}

const rawData = fs.readFileSync(fileName);
const orders = JSON.parse(rawData);
if (process.argv.includes("-r")) {
  console.log(orders.filter((order) => order.status === "ready").length);
} else {
  console.log(orders.length);
}

// ------------->
// 1. run 함수를 만들어 노드의 process 디펜던시 제거
run(process.argv);

// 2. 사용자에게 입력받아 유효성 검사하는 로직 분리
// 3. 필요한 로직 처리
function run(args) {
  // 인자를 기반으로 데이터를 처리하도록 빼주는게 좋다
  if (!args[2]) {
    throw new Error("파일 이름을 입력하세요");
  }
}
