// 함수 옮기기
// 중첩 함수 존재
// 함수 안에서 사용하는 데이터와 연관 있는지 확인하고
// 상관이 없다면 바깥으로 위치를 옮겨보자

export function trackSummary(points) {
  // trackSummary에 필요한 것만 남겨서 응집도를 높여보자
  const time = calculateTime();
  const distance = calculateDistance(points);
  const pace = time / 60 / distance;
  return {
    time,
    distance,
    pace,
  };
}

function calculateTime() {
  return 10000;
}

function distance(p1, p2) {
  // 포뮬라: http://www.movable-type.co.uk/scripts/latlong.html
  const EARTH_RADIUS = 3959; // in miles
  const dLat = radians(p2.lat) - radians(p1.lat);
  const dLon = radians(p2.lon) - radians(p1.lon);
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(radians(p2.lat)) *
      Math.cos(radians(p1.lat)) *
      Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}

function radians(degrees) {
  return (degrees * Math.PI) / 180;
}

function calculateDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}

const newYork = {
  lat: 40.73061,
  lon: -73.935242,
};

const tokyo = {
  lat: 35.652832,
  lon: 139.839478,
};

const summary = trackSummary([newYork, tokyo]);
console.log(summary);
