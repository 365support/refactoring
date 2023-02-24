// 함수를 명령으로 바꾸기
// 객체지향 선호 - 객체지향적인 코드를 작성하고 싶다면, 함수를 명령으로 바꾸기를 적용하자.
// 점수매기는 클래스로 만들면 될 것 같음
// 클래스 중에서도 한가지의 명령을 수행하는 함수 하나만을 가지고 있는 것을 명령(command) 객체라고 부른다.
// 이렇게 만들어진 패턴을 command 패턴이라고 한다

// command 패턴의 정점은 함수 하나만 있어야 하는 것이 아니라서
// 실행하는 함수 do 가 있다면 취소하는 함수 undo 도 만들 수 있다는게 장점이다

// 긴 계산하는 함수를 명령객체로 만들고 필요한 데이터를 영구적으로 보관하며 필요한 동작, 명령을 수행할 수 있는 명령객체로 반환
export function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this.candidate = candidate;
    this.medicalExam = medicalExam;
    this.scoringGuide = scoringGuide;
  }

  execute() {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (this.medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }
    let certificationGrade = "regular";
    if (
      this.scoringGuide.stateWithLowCertification(this.candidate.originState)
    ) {
      certificationGrade = "low";
      result -= 5;
    }
    // lots more code like this
    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
}
export class ScoringGuide {
  stateWithLowCertification(state) {
    return state < 5;
  }
}
