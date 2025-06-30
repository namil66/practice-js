/* eslint-disable no-unused-vars */
// --------------------------------------------------------------------------
// 📌 배열의 메서드(Array's Methods)
// --------------------------------------------------------------------------

const JS_학습_주제 = [
  "변수",
  "함수",
  "조건문",
  "객체",
  "배열",
  "비교 연산자",
  "부정 연산자",
];

// --------------------------------------------------------------------------
// 배열 항목 위치(index) 찾기(find)
let 함수_인덱스, 비교_연산자_인덱스;

함수_인덱스 = JS_학습_주제.indexOf("함수"); // 기대값: 1 / 결과값: ?
// console.log('함수_인덱스 =', 함수_인덱스)
함수_인덱스 = JS_학습_주제.indexOf("함 수"); // 기대값: -1 / 결과값: ?
// console.log('함수_인덱스 =', 함수_인덱스)

비교_연산자_인덱스 = JS_학습_주제.indexOf("비교");
// console.log('비교_연산자_인덱스 =', 비교_연산자_인덱스) // 기대값: -1 / 결과값: -1

비교_연산자_인덱스 = JS_학습_주제.indexOf("비교연산자");
// console.log('비교_연산자_인덱스 =', 비교_연산자_인덱스) // 기대값: -1 / 결과값: -1

비교_연산자_인덱스 = JS_학습_주제.indexOf("비교 연산자");
// console.log('비교_연산자_인덱스 =', 비교_연산자_인덱스) // 기대값: 5 / 결과값: 5

// indexOf() 메서드의 결과 값을 불리언 값으로 변경하려면?

const fruitBasket = ["패션후르츠", "애플망고", "워터멜론", "오렌지"];

// --------------------------------------------------------------------------
// indexOf() 메서드가 반환한 값이 -1보다 크다면? 그 값은 true이다.

// console.log(fruitBasket.indexOf('패션') > -1) // false
// console.log(fruitBasket.indexOf('패션후르츠') > -1) // true
// console.log(fruitBasket.indexOf('애플망고') > -1) // true
// console.log(fruitBasket.indexOf('워터멜론') > -1) // true
// console.log(fruitBasket.indexOf('오렌지') > -1) // true
// 배열.indexOf(값): 불리언

// --------------------------------------------------------------------------
// 구문이 긴데? 재사용 가능한 함수로 작성해볼까요?
// 배열.indexOf(값): 불리언

// function hasItem(array, value) {
//   return array.indexOf(value) > -1
// }

// const hasItem = function (array, value) {
//   return array.indexOf(value) > -1
// }

// const hasItem = (array, value) => {
//   return array.indexOf(value) > -1
// }

// const hasItem = (array, value) => array.indexOf(value) > -1
const hasItem = (array, value) => array.indexOf(value) > -1;

// console.log(hasItem(fruitBasket, '패션')) // 기대값: false
// console.log(hasItem(fruitBasket, '오렌지')) // 기대값: true

// --------------------------------------------------------------------------
// indexOf() 메서드 대신, includes() 메서드 활용
// console.log(fruitBasket.includes('워터멜론'))
// console.log(fruitBasket.includes('수박'))

// --------------------------------------------------------------------------
// 객체 타입(함수, 배열, 객체)은 indexOf()로 판별 가능하지 않음
const 멋사14기_수강생 = [
  { 이름: "홍민영" }, // 0
  { 이름: "윤정화" }, // 1
  { 이름: "허시온" }, // 2
];

// console.log(1, 멋사14기_수강생.indexOf({이름: '홍민영'})) // -1
// console.log(2, 멋사14기_수강생.findIndex((수강생) => 수강생.이름 === '홍민영')) // 0

// --------------------------------------------------------------------------
// 배열에 항목 추가

// 1. 시작 위치에 새 항목 추가
{
  const length = 멋사14기_수강생.unshift({ 이름: "차지현" }); // 반환 값: 배열의 length
  // console.log({length, 멋사14기_수강생})
}

{
  // console.log(JS_학습_주제.unshift('디버깅', '린터', '배열 메서드'))
  // console.log(JS_학습_주제)
}

// 2. 끝 위치에 새 항목 추가

{
  멋사14기_수강생.push({ 이름: "장효정" }); // return value : length
  // console.log(멋사14기_수강생)
}

{
  JS_학습_주제.push(
    ".indexOf()",
    ".findIndex()",
    ".at()",
    ".unshift()",
    ".push()"
  );
  // console.log(JS_학습_주제)
}

// --------------------------------------------------------------------------
// 배열에 항목 제거

{
  const counts = [101, 201, 301, 501];
  // console.log({ 'counts': counts }) // [101, 201, 301, 501] | length: 4

  // ECMAScript 2015
  // 객체 표기 단축 방법
  // console.log('🌈', { 'counts': counts })
  // console.log('🌈', { counts: counts })
  // console.log('🌈', { counts })

  // 1. 처음 위치 항목 제거
  const removedFirstItem = counts.shift();
  // console.log({ 'removedFirstItem': removedFirstItem }) // 101
  // console.log({ 'counts': counts }) // [201, 301, 501] | length: 3
}

{
  // console.log(멋사14기_수강생) // length: 5

  // 여러 항목을 맨 앞에서 순차적으로 제거
  const cha = 멋사14기_수강생.shift(); // length: 4
  const hong = 멋사14기_수강생.shift(); // length: 3
  // console.log('🤖', cha) // 첫 번째 항목
  // console.log('🤖', hong) // 두 번째 항목
  // console.log('🤖', 멋사14기_수강생) // 남은 수강생 목록(집합)
}

// 2. 끝 위치 항목 제거
{
  // console.log(멋사14기_수강생) // length: 3

  const jang = 멋사14기_수강생.pop(); // length: 2
  const heo = 멋사14기_수강생.pop(); // length: 1

  // console.log(jang)
  // console.log(heo)
  // console.log(멋사14기_수강생) // [{}]
}

// 맨 앞에 추가: .unshift(item1, item2, ...)
// 맨 뒤에 추가: .push(item1, item2, ...)
// 맨 앞에 제거: .shift()
// 맨 뒤에 제거: .pop()

const numbers = [9, 10, 3, 4, 7, 8];
console.log(numbers); // [9, 10, 3, 4, 7, 8]

// 맨 앞 제거 -> 추가
// numbers.shift()
// numbers.shift() // [3, 4, 7, 8]
numbers.splice(0, 2);
// numbers.unshift(1, 2)
numbers.splice(0, 0, 1, 2);

// 배열.splice(시작인덱스,제거할갯수,추가항목1,추가항목2,...,추가항목N)
// numbers.splice(numbers.length - 2, 2, 5, 6)

// 맨 뒤 제거 -> 추가
// numbers.pop()
// numbers.pop()
numbers.splice(numbers.length - 2, 2); // [1, 2, 3, 4]
// numbers.push(5, 6)
numbers.splice(numbers.length, 0, 5, 6);

// 추가 및 제거 방법을 사용해 아래 결과를 만들어 보세요.
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// const numbers = [9, 10, 3, 4, 7, 8];
// 추가 및 제거 방법을 사용해 아래 결과를 만들어 보세요.
// [1, 2, 3, 4, 5, 6]

// --------------------------------------------------
const deletedItems = array.splice(startIndex, deleteCount, itemsToAdd);
//0 , 2를 하면 0(인덱스)부터 시작해서 2개를 제거함.

// --------------------------------------------------------------------------
// 배열 중간 위치 어딘가에 새 항목 추가 또는 삭제
// 배열의 .splice() 메서드 : 추가/삭제/교체

// 중간에 포함된 항목을 삭제
// 배열.splice(시작 인덱스, 삭제할 갯수)
// console.log(numbers) // [1, 2, 3, 4, 5, 6]
// const removedItems = numbers.splice(2, 2)
// console.log(removedItems) // [3, 4]
// console.log(numbers) // [1, 2, 5, 6]

// 중간에 새 항목 추가
// console.log(numbers) // [1, 2, 3, 4, 5, 6]
// console.log(numbers.splice(3, 0, 100, 101, 102)) // []
// console.log(numbers) // [1, 2, 3, 100, 101, 102, 4, 5, 6]

// 중간에 포함된 항목을 삭제하고, 새 항목을 추가

// --------------------------------------------------------------------------
// 배열의 원소 잘라(slice) 새 배열 반환
// .slice(startIndex, endIndex) -> 시작 인덱스부터 끝 이전 인덱스까지 포함한 새 배열 반환
// 배열 복제
// .slice() -> 통째로 모두 잘라서 새 배열 반환

// --------------------------------------------------------------------------

// 배열 중간에 splice 통해서 삭제할 땐, .splice(2,2)와 같이 삭제할 갯수까지만 써도 되는데,
// 추가할 땐 세 개를 다 쓰는데 혹시 삭제할 때는 두 개만 써도 되는 이유가 뭔가요?

// (시작위치, 삭제 개수, 추가할 것)에서 추가할 것이 null로 인식되는 건가요?
// 추가할 때는 무조건 매서드 내에 3개 이상의 항목을 입력해야 하나요?

// 배열 객체의 splice() 메서드 구문 (참고: https://mzl.la/3TsizxR)
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// array.slice(start)
// array.slice(start, deleteCount)
// array.slice(start, deleteCount, newItem1)
// array.slice(start, deleteCount, newItem1, newItem2, ...)
