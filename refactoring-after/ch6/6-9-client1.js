// 여러 함수를 클래스로 묶기
// 요새는 함수를 변환함수로 묶는 것 보다 클래스로 묶는 것을 더 선호한다

import { acquireReading } from "./6-9.js";

const reading = acquireReading();

console.log(reading.baseCharge);
