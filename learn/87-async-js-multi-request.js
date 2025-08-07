(() => {
  // 비동기 요청 1
  delay(getRandomTime())
    .then((response) => {
      console.log("1", response);
    })
    .catch(console.error);

  // 비동기 요청 2
  delay(getRandomTime())
    .then((response) => {
      console.log("2", response);
    })
    .catch(console.error);

  // 비동기 요청 3
  delay(getRandomTime())
    .then((response) => {
      console.log("3", response);
    })
    .catch(console.error);

  function delay(timeout = 1000, forceReject = false) {
    return new Promise((resolve, reject) => {
      // 웹 브라우저 타이머 API
      setTimeout(() => {
        if (forceReject)
          reject(new Error(`❌ ${timeout / 1000}초 뒤에 리젝트 됨`));
        resolve(`✅ ${timeout / 1000}초 뒤에 리졸브 됨`);
      }, timeout);
    });
  }

  function getRandomTime(min = 1000, max = 3000) {
    return Math.round(Math.random() * (max - min) + min);
  }
})();
