// # 실습
// 콘솔 패널에서 숫자, 문자열, 불리언 값을 만들어 다음을 연습합니다.

// 1. 문자열(String) 만들고 출력하기
// console.log('남일쒸')
// 2. 문자열 두 개 합치기
// console.log('남일쒸' + ' 쓰레기')
// 3. 숫자(Number) 만들고 출력하기
// console.log(66)
// 4. `31`과 `81` 더하기
// console.log(31 + 81) // 112
// 5. `502`에서 `271` 빼기
// console.log(502 - 271) // 231
// 6. `5`와 `117` 곱하기
// console.log(5 * 117) // 585
// 7. `100`을 `8`로 나누기
// console.log(100 / 8) // 12.5
// 8. `502`를 `3`으로 나눈 나머지 구하기
// console.log(18 % 5) // 1 왜 1이 나오냐면 501을 3으로 나누면 167로 딱 떨어짐. 그러면 1이 남음.
// 9. 불리언(Boolean) 만들고 출력하기
//   console.log(false)
//   console.log(true)

// 1. `const` 키워드를 사용해 값이 변하지 않는 상수를 선언해봅니다.
// const에 들어가는 이름은 대문자로 쓰는 것이 관례.
//     1. "하루는 24시간"
         const HOURS_IN_DAY = 24
//     2. "물의 어는 점은 섭씨 0도 = ℃"
         const FREEZING_POINT_CELSIUS = 0
//     3. "삼각형 내각의 합은 180°"
         const TRIANGLE_ANGLE_SUM = 180
//     4. "지구의 중력 가속도는 9.8 m/s²"
         const EARTH_GRAVITY = 9.8

// 2. 다음 내용을 코드로 작성해 결과 값을 콘솔 패널에 출력해보세요.
// 1. `let` 키워드를 사용해 `sum` 변수를 선언하고 값을 `0`으로 설정합니다.
 let sum = 0
// 2. `num1`, `num2` 변수를 선언하고, 각각 `300`, `50`으로 값을 설정합니다.
// [1]
 let num1 = 300
 let num2 = 50

// [2]
// let num1, num2
// num1 = 300
// num2 = 50

// [3]
// let num1 = 300, num2 = 50

// [4]
// let num1 = 300, 
//     num2 = 50,
//     num3 = -90


//     3. `num1`, `num2`의 합을 `sum` 변수에 할당합니다.
         sum = num1 + num2
         console.log('sum = ', sum)
// 3. 사람 이름, 나이, 오늘의 기온, 장바구니 상품 갯수, 집 주소, 현재 시간,
// 로그인 상태, 피자 가격, 학생 수 등에 걸맞는 변수 이름을 정하고 적절한 값을 설정합니다.
      const humanName = 'namilc'
      let old = 23
      let todayWeather = '30도'
      let shoppingcartProduct = 1
      const houseAddress = 'incheon'
      let currentTime = 14_28
      let loginStatus = 'online'
      const pizzaPrice = 14900
      const student = 31

// 나만의 라면 끓이기
// 1. 냄비에 물을 올리고 바로 강불
// 2. 스프랑 건더기 투하
// 4. 물이 끓으면 면과 계란 투하
// 5. 3분 뒤에 그릇에 옮겨 담는다.



// 09. 연습.




// --------------------------------------------------------------------------
// 📌 객체 만들기
// --------------------------------------------------------------------------

// 예) 사람(person) 또는 도서(book)

let book
console.log(book)

// 1. 빈 객체를 정의합니다.
book = {}
console.log(book)

// 2. 점 표기법으로 접근할 수 있는 객체 속성을 추가하고, 속성 값을 읽어보세요.
book.title = '첫 여름, 완주'
console.log(book)

// 3. 대괄호 표기법으로만 접근 가능한 객체 속성도 추가하고, 속성 값을 읽어보세요.
book['page count'] = 224
console.log(book)

// 4. 점 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
book.title = '자매일기'
console.log(book)

// 5. 대괄호 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
book['page count'] = 180
console.log(book)

// 6. 객체의 속성 타입을 함수로 설정해 메서드를 추가하고, 이 메서드를 호출해보세요.
book.getAuthors = function() {
  return '박소영, 박수영'
}
console.log(book.getAuthors)
console.log(book.getAuthors())

// 7. 객체의 메서드에 매개변수를 추가하고, 이 메서드를 호출해봅니다.
book.getPrice = function(unit) {
  return '16,200' + unit
}

console.log(book)
console.log(book.getPrice('원'))

// 8. 객체의 속성 중 하나를 선택해, 삭제해보세요.
console.log(book)
delete book['page count']
console.log(book)
book.pageCount = 180
console.log(book)