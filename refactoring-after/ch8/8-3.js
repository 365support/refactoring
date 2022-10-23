// 문장을 함수로 옮기기

// 위치와 날짜를 출력해주는 기능 다음에 타이틀을 출력하는 기능이 들어갔을 경우가 높다
// 이때 생각없이 renderPerson 함수와 photoDiv 함수 두곳에서 title push 하는 함수를
// 불러온다면 emitPhotoData 안으로 넣을 수 있도록 해야한다

export function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
}

export function photoDiv(photo) {
  return ["<div>", emitPhotoData(photo), "</div>"].join("\n");
}

// 사진 출력 데이터 함수
function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>title: ${person.photo.title}</p>`);
  result.push(`<p>location: ${aPhoto.location}</p>`);
  result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
  return result.join("\n");
}

function renderPhoto(aPhoto) {
  return "";
}
