// 컬렉션 캡슐화

export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [...this.#courses];
  }

  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);
    if (index === -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }
  // set courses(courses) {
  //   this.#courses = courses;
  // } 전체적으로 set 하지 못하게 만들기
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const support = new Person("support");

// support.courses.push(new Course("리팩토링", true));
// 전달받은 배열을 이용해 밖에서 변경이 가능한 것이 문제

// 함수를 이용해서 변경 가능하도록 하기
const course = new Course("리팩토링", true);

support.addCourse(course);
console.log(support.courses.length);

support.removeCourse(course, () => {
  console.log("해당 코스는 없습니다.");
});

console.log(support.courses.length);
