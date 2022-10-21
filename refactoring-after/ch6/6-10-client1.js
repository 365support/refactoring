// 여러 함수를 변환 함수로 묶기

import { acquireReading, enrichReading } from "./6-10.js";

const rawReading = acquireReading();
const reading = enrichReading(rawReading);

console.log(reading.baseCharge); // 계산된 데이터 한번 저장
console.log(reading.taxableCharge); // 데이터가 변경되어도 업데이트 되지 않음
