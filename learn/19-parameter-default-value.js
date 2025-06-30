// --------------------------------------------------------------------------
// 📌 함수 매개변수 기본값 설정 (조건문 활용)
// --------------------------------------------------------------------------


function getMoney(price/* 필수 */, unit /* 옵션 */) {
  // console.log(price)
  // console.log(unit)

  // unit 매개변수(옵션)
  // 설정 가능한 값: '달러' 또는 '원화'
  // 기본 값: '원'

  // 만약 사용자가 전달한 인수에 의해 unit 매개변수 값이 undefined로 설정된다면
  if (unit === undefined) {
    // '원' 값을 unit 매개변수의 기본값으로 설정한다.
    unit = '원'
  } // 블럭 안의 코드가 한 줄이면 생략 가능. (암묵적 반환은 아님.)

  // 사용자가 전달한 인수 값이 '달러'인 경우,
  // 문자 연결하는 방법을 달리해서 결과값을 반환한다.
  if (unit === '달러') {
    // 반환값  '$' + '80.75'
    return '$' + price
  }

  // 매개변수 타입 비교
  // if (unit === undefined) {

  // 매개변수 타입이 무엇인지 문자값으로 비교
  // if (typeof unit === 'undefined') {

  // 조건문 소괄호 안에서 조건이 평가 (Truthy or Falsey)
  // 평가 이후, 부정(NOT, !) 연산자로 평가 반전
 
  // if (!unit) {
  //   unit = '원'
  // }

  // if (unit === '달러') {
  //   return '$' + price
  // }


  // 개발자가 명시적으로 반환값 설정
  return price + unit

  // 함수는 암묵적으로 undefined 반환
  // return undefined
}

// 실제 결과 코드
// function getMoney(price, unit) {
//   if (!unit) unit = '원'
//   if (unit === '달러') return '$' + price
//   return price + unit
// }

// let moneyKR = getMoney(5000 + 2000 + 1500 + 500) 
// let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '달러') 

// console.log(moneyKR)
// console.log(moneyUS)

let moneyKR = getMoney(5000 + 2000 + 1500 + 500) 
let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '달러') 

console.log(moneyKR) // '9000원'
console.log(moneyUS) // '$80.75'