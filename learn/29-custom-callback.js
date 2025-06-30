const body = document.body;
const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");

// Mouse Event
// - click
// - dblclick
// - mousedown
// - mousemove
// - mouseup
// - mouseenter(element, listener)
// - mouseleave(element, listener)

// 커스텀 콜백
// - mouseenter(element, listener)
button1.addEventListener("mouseenter", () => {
  console.log("enter");
});

// - mouseleave(element, listener)
button1.addEventListener("mouseleave", () => {
  console.log("leave");
});

const handleActive = () => {
  body.classList.add("is-active");
  button1.classList.add("is-active");
  button2.classList.add("is-active");
};

const handleInactive = () => {
  body.classList.remove("is-active");
  button1.classList.remove("is-active");
  button2.classList.remove("is-active");
};

mouseenter(button1, handleActive);
mouseleave(button1, handleInactive);
mouseenter(button2, handleActive);
mouseleave(button2, handleInactive);

// ------------------------------------------------------------------------

click(document.querySelector(".button-1"), () => console.log("button 1"));
click(document.querySelector(".button-2"), () => console.log("button 2"));

const handleClick = () => console.log("clicked button");
// button.addEventListener('click', handleClick)

// click(button1, handleClick)
// click(button2, handleClick)

// --------------------------------------------------------------------------

function callToAction(callback) {
  callback();
}

// callToAction(() => {
//   console.log('콜백은 다른 함수에 인수로 전달되는 함수를 말합니다.')
// })
