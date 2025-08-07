/* global axios */
// 멀티 이미지 업로드 기능 구현
(() => {
  const uploadForm = document.querySelector('[data-id="upload-form"]');
  const fileInput = uploadForm.querySelector('input[type="file"');

  fileInput.addEventListener("change", (e) => {
    const fileInput = e.currentTarget;
    createThumbnails(fileInput);
  });

  uploadForm.addEventListener("submit", (e) => {
    // 브라우저 기본 작동 방지
    e.preventDefault();

    // 이벤트가 연결된 대상: 폼 요소
    const form = e.currentTarget;
    // console.log(form)

    // FormData 학습
    learnFormData(form);

    // 폼 초기화
    deleteThumbnails();
    form.reset();
  });

  function createThumbnails(fileInput) {
    // 썸네일 컨테이너
    let container = uploadForm.querySelector(".thumbnails");
    // 단, uploadForm 내부에 .thumbnails 요소가 없다면 생성
    if (!container) {
      container = document.createElement("div");
      container.classList.add("thumbnails");
    }

    // 썸네일 생성 화면에 표시를 위한 템플릿 작성
    let template = "";
    const size = 80;

    for (const file of fileInput.files) {
      // 파일로 이미지 URL 만들기 => URL.createObjectURL(file)
      template += `
        <img
          src="${URL.createObjectURL(file)}"
          alt=""
          width="${size}"
          height="${size}" 
        />`.trim();
    }

    // 컨테이너의 마지막 자식들로 템플릿을 사용해 HTML 요소 생성
    container.innerHTML = template;

    // 파일 인풋 뒤에 컨테이너 추가(삽입)
    fileInput.after(container);
  }

  function deleteThumbnails() {
    uploadForm.querySelector(".thumbnails")?.remove();
  }

  function learnFormData(form) {
    // 폼 요소의 데이터를 가져오기 위해 폼 데이터 객체 생성
    const formData = new FormData();
    // console.log(formData)

    // 폼 컨트롤 요소 집합(elements)
    const [fileInput] = form.elements;

    // 파일 인풋의 업로드할 파일들 루프(loop)
    for (const file of fileInput.files) {
      const [key] = file.name.split(".");
      // console.log(key)
      formData.append(key, file);
    }

    // formData -> JavaScript Object
    console.log(Object.fromEntries(formData));
  }
})();
