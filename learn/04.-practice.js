// # 실습
// 콘솔 패널에서 숫자, 문자열, 불리언 값을 만들어 다음을 연습합니다.

// 1. 문자열(String) 만들고 출력하기

// 2. 문자열 두 개 합치기
// 3. 숫자(Number) 만들고 출력하기
// 4. `31`과 `81` 더하기
// 5. `502`에서 `271` 빼기
// 6. `5`와 `117` 곱하기
// 7. `100`을 `8`로 나누기
// 8. `502`를 `3`으로 나눈 나머지 구하기
// 9. 불리언(Boolean) 만들고 출력하기

// 1. `const` 키워드를 사용해 값이 변하지 않는 상수를 선언해봅니다.
//     1. "하루는 24시간"
         const day = 24
//     2. "물의 어는 점은 섭씨 0도 = ℃"
         const icedWater = 0
//     3. "삼각형 내각의 합은 180°"
         const add_Triangle_in_angles = 180
//     4. "지구의 중력 가속도는 9.8 m/s²"
         const G_Force = 9.8

// 2. 다음 내용을 코드로 작성해 결과 값을 콘솔 패널에 출력해보세요.
//     1. `let` 키워드를 사용해 `sum` 변수를 선언하고 값을 `0`으로 설정합니다.
           let sum = 0
//     2. `num1`, `num2` 변수를 선언하고, 각각 `300`, `50`으로 값을 설정합니다.
          // [1]
          let num1 = 300
          let num2 = 50

//     3. `num1`, `num2`의 합을 `sum` 변수에 할당합니다.
         sum = num1 + num2
         console.log('sum = ', sum)
// 3. 사람 이름, 나이, 오늘의 기온, 장바구니 상품 갯수, 집 주소, 현재 시간,
// 로그인 상태, 피자 가격, 학생 수 등에 걸맞는 변수 이름을 정하고 적절한 값을 설정합니다.
      const humanName = 'namilc'
      let old = 23
      let todayWeather = '30도'
      let shoppingcartProduct = 1
      const houseAddress = incheon
      let currentTime = 14_28
      let loginStatus = online
      const pizzaPrice = 14900
      const student = 31

// 나만의 라면 끓이기
// 1. 냄비에 물을 올리고 바로 강불
// 2. 스프랑 건더기 투하
// 4. 물이 끓으면 면과 계란 투하
// 5. 3분 뒤에 그릇에 옮겨 담는다.