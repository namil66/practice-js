import gsap from "https://esm.sh/gsap";
import DOMpurify from "https://esm.sh/DOMpurify";
import axios from "https://esm.sh/axios";

// 일반 동기 함수
(function 일반함수() {
  const delayTime = 200;

  // 비동기 요청
  delay(delayTime)
    .then((message) => {
      console.log("시작!", message);
      return delay(delayTime);
    })
    .then((message) => {
      console.log(message);
      return delay(delayTime);
    })
    .then((message) => {
      console.log(message);
      return delay(delayTime);
    })
    .then((message) => {
      console.log(message);
      return delay(delayTime);
    })
    .then((message) => {
      console.log(message, "끝");
    });
})();
