//------------------------------------------------------------------
//  조건문 - if ..else
//------------------------------------------------------------------

// 프로그래밍 조건문

// 조건 = "참 같은 값(Truthy)"으로 평가
// 조건 = "거짓 같은 값(Falsey)"으로 평가 
// 거짓 값은 값으로 평가되는 것들
// - false (boolean)
// - 0 (number)
// - '' (string)
// - null
// - undefined
// - NaN (숫자 + undefined)

let isLightColorRed = false

// 표현식 10 - 11 = -1

if (10 - 11) {
  console.log('신호등 앞에서 멈춰야 합니다.')
} else {
  console.log('좌우를 살피고 건널목을 건넙니다.')
}

// 불리언 타입 변경
console.log(Boolean(-1))
console.log(Boolean(0))
console.log(Boolean(1))

console.log(Boolean(''))
console.log(Boolean(' '))
console.log(Boolean('hi'))

console.log(Boolean(true))
console.log(Boolean(false))

console.log(Boolean(null))
console.log(Boolean(undefined))

console.log(Boolean(Symbol('y9')))
console.log(Boolean(101n))

console.log(Boolean(() => {}))
console.log(Boolean({}))
console.log(Boolean([]))


if (-100) {
  console.log('this is truethy')
} else {

}

x = 10
y = 5

// JavaScript는 상황에 따라 타입을 자동 변환

if(x == y)  { console.log('this is truthy') }
if(x === y) { console.log('this is truthy') }
if(x != y)  { console.log('this is truthy') }
if(x !== y) { console.log('this is truthy') }
if(x < y) { console.log('this is truthy') }
if(x <= y) { console.log('this is truthy') }
if(x > y) { console.log('this is truthy') }
if(x >= y) { console.log('this is truthy') }


// 개발자 작성
console.log(Boolean(24 == '24'))
// JavaScript 엔진 처리 (타입 자동 변환, 느슨한 비교)
console.log(Boolean('24' == '24'))

// 개발자 작성
console.log(Boolean(24 === '24'))
// JavaScript 엔진 처리 (타입 변경 안함, 엄격한 비교)
console.log(Boolean(24 === '24'))



let condition = true

// 조건 (참이다, 아니다 : 흑백논리)
if (condition) {}
else {}

let 신호등_색상 = 'green'
let 신호 = 'red'

if (신호등_색상 == 신호) {
  console.log('건너면 안돼요')
} else {
  console.log('좌우를 살피고 걸어요')
}


let lightColor = 'brown'

// 조건 1 (신호등 불이 빨간색)
if (lightColor === 'red') {
  console.log('건너지 마세요~')
} 
// 조건 2 (신호등 불이 노란색)
else if (lightColor === 'yellow') {
  console.log('뒤지기 싫으면 움직이지 마세요~')
} 
// 조건 3 (신호등 불이 초록색)
else if (lightColor === 'green'){
  console.log('양 옆 살피고~ 한 손을 번~쩍~! 조심히~ 건너요~!')
} 
// 이도 저도 아니면...
else {
  console.log(lightColor + ' 같은 색은 없어요. 신호등 색을 지정하세요^^')
}

// 질문 내용.
// 신호등 예시에서

// let lightColor = '노란색'
let car ='stop'

let 조건A = lightColor === '노란색'
let 조건Z = car === 'stop'

// 조건A 그리고(and, &&) 조건Z -> '안경도 썻고, 키도 컸어요.'
// 조건A 또는(or, ||) 조건Z  -> '안경을 썻거나, 키가 크거나.'

// 이런식으로 두 조건을 만족 해야만 
// true값이 나오게 하려면 어떻게 할까요...
// if(조건A && 조건Z) {
if (lightColor === '노란색' && car === 'stop') {
  console.log('차가 멈췄고, 신호등 불빛색이 노란색이니까 서둘러 이동합시다.')
}


// 실습
const 성현나이 = '23'
const 아현나이 = '24'
const 명호나이 = '27'
const 재웅나이 = '41'

if (성현나이 < 명호나이) {
  console.log('성현이는 명호보다 어려요 ㅋㅋ')
} else if (성현나이 > 명호나이) {
  console.log('성현이가 명호보다 나이가 많네요?')
}

if (성현나이 < 아현나이) {
  console.log('성현이는 아현이보다 어려요 ㅋㅋ')
} else if (성현나이 > 아현나이) {
  console.log('성현이가 아현이보다 나이가 많네요?')
} 

if (성현나이 < 재웅나이) {
  console.log('성현이는 재웅이보다 까마~득하게 어려요 ㅋㅋ')
} else if (성현나이 > 재웅나이) {
  console.log('성현이가 재웅이보다 나이가 많네요? 왜?')
}

// 실습 정답
// 1. 명호는 24살, 아현이는 27살, 재웅이는 41살입니다.

// const 명호 = { 나이: 24 }
// const 아현 = { 나이: 27 }
// const 재웅 = { 나이: 41 }

// //     1. 성현이의 나이를 설정합니다.
// const 성현 = { 나이: 22 }

// //     2. 성현이가 명호보다 어린지 확인하여 적절한 로그가 출력되도록 구성합니다.
// if (성현.나이 < 명호.나이) {
//   console.log('성현이가 명호한테 형이라고 해야지.')
// }

// 성현.나이 = 성현.나이 + 10

// //     3. 성현이가 아현이보다 나이가 많은 지 확인한 후, 그렇다면 로그를 출력하도록 작성합니다.
// if (성현.나이 > 아현.나이) {
//   console.log('성현이가 아현이보다 나이가 많으니 더 어른처럼 행동하자.')
// }

// console.log(성현.나이)

// 성현.나이 = 성현.나이 + 9 // 32 + 9 = 41

// //     4. 성현이가 재웅이보다 나이가 많거나 같은 지 확인하기 위한 코드 또한 작성해보세요.
// if (성현.나이 >= 재웅.나이) {
//   console.log('성현이가 재웅이랑 나이가 같거나 형이던가?')
// }

// 2. 다음 중, 거짓(falsey)으로 평가되는 것을 골라보세요.
console.log(Boolean(null))
console.log(Boolean(true))
console.log(Boolean(-1))
console.log(Boolean(undefined))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean({}))
console.log(Boolean(false))
console.log(Boolean(" "))
console.log(Boolean({ isHavingFun: true }))