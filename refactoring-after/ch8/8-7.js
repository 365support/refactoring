// 반복문 쪼개기

// 같은 일을 하는 반복문 끼리 나누기
// totalSalary를 계산
// 가장 나이가 적은 사람 찾기로 나누자

// 반복문을 나누면 시간복잡도가 괜찮은가?
// 2 X BigO(N)
// N의 n승이라면 심각한 문제
// 2BigO(N) 은 BigO(N) 과 동일해서 성능측면에서 문제가 없다
// 성능이 걱정이라면 측정 후에 개선하자

export function reportYoungestAgeAndTotalSalary(people) {
  // 함수 선언은 호이스팅이 되니까 위로 올려보기
  return `youngestAge: ${youngestAge(people)}, totalSalary: ${totalSalary(
    people
  )}`;
}

function youngestAge() {
  return Math.min(...people.map((p) => p.age));
}

function totalSalary() {
  return people.reduce((total, p) => (total += p.salary), 0);
}
