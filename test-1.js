// 버튼과 바디를 정의.
const btn = document.querySelector("button");
const body = document.body;

btn.addEventListener("click", (e) => {
  console.log("짜잔~!");
  body.classList.toggle("is-active");
  btn.classList.toggle("is-active");
});
// 클릭할 경우 짜잔 메시지 출력과 배경 색이 바뀜.
