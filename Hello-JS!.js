// console은 코드의 결과를 확인 하는 창.

console.log("Hello world!");

// function 다음에 오는 "smang"은 함수 이름. 아무렇게나 지정가능함. html의 class라고 생각하면 됨 다만 역할에 맞게.
// x 값에 1을 넣으면 2 + 3 = 5가 출력됨.
// temp는 변수 이름.
// return은 다시 돌려준다 = 결과 값을 보내준다
function smang(x) {
  let temp = 2 * x + 3;
  return temp;
}

smang(1);

// x와 y에 값을 지정하면 x + y를 temp라는 변수에 임시 저장.
function plus(x, y) {
  let temp = x + y;
  return temp;
}

plus(1, 2);

// 조건문 : 돈이 5000원 이상 있으면 택시를 타고, 없으면 걸어 간다.
//                    [시작] (논리의 시작)
//        참           ㅣ                  거짓
//        ㅡㅡㅡㅡㅡ[돈 > 5000원] (가정)ㅡㅡㅡㅡㅡ
//        ㅣ                                ㅣ
//        ㅣ                                ㅣ
//     택시를 탄다(결과)                    걸어간다

// if (money >= 5000) {
//   ridetaxi();
// } else {
//   walk();
// }

// 조건문 : 돈이 5000원 이상 있으면 택시를 타고, 없으면 걸어간다. 돈이 2000원 이상 있으면 버스를 타고 없으면 걸어간다.
//                    [시작] (논리의 시작)
//        참           ㅣ                  거짓
//        ㅡㅡㅡㅡㅡ[돈 > 5000원] (가정)ㅡㅡㅡㅡㅡ
//        ㅣ                                ㅣ
//        ㅣ                                ㅣ
//     택시를 탄다(결과)                    걸어간다
//                                          ㅣ
//                                          ㅣ
//                               ㅡㅡㅡㅡ돈 > 2000ㅡㅡㅡㅡ
//                               ㅣ                   ㅣ
//                               ㅣ                   ㅣ
//                           버스를 탄다             걸어간다
//

let money = 5000;

if (money >= 5000) {
  console.log("택시를 탄다.");
} else if (money >= 2000) {
  console.log("버스를 탄다.");
} else {
  console.log("걸어가기 당첨!");
}
