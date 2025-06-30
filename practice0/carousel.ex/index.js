const imageList = [ //슬라이드에서 사용할 이미지들의 목록을 배열로 저장합니다.
  'images/1.png',
  'images/2.png',
  'images/3.png',
  'images/4.png'
];

let current = 0; //현재 보여지고 있는 이미지의 인덱스를 저장하는 변수입니다.
                 //기본값 0은 imageList[0] 즉, 첫 번째 이미지부터 시작하겠다는 의미입니다.
                 //실무에서 거의 무조건 필요합니다. 현재 상태(슬라이드 위치)를 기억하려면 필수예요.
let slideInterval = null; //자동 슬라이드가 작동할 때 setInterval로 반환된 ID를 저장하는 변수입니다.
                          //이후 clearInterval을 쓸 때 이 ID가 필요함.

const imageWrapper = document.querySelector('.image-wrapper'); // 메인 이미지가 삽입될 div를 선택합니다.
const dotContainer = document.getElementById('paginationDots');// 점 네비게이션(span들)을 삽입할 요소입니다.
const thumbnailContainer = document.getElementById('thumbnailContainer');// 썸네일 이미지들을 삽입할 요소입니다.

// 이미지 엘리먼트 생성 (fade 효과용)
const imageElement = document.createElement('img');  // 이미지 태그를 새로 생성합니다.
imageElement.id = 'carouselImage'; // 생성한 img 태그에 id를 부여합니다
imageElement.src = imageList[current];// 현재 인덱스에 해당하는 이미지를 src로 설정합니다
imageElement.classList.add('show'); // CSS에서 fade 효과를 적용하기 위한 클래스입니다.
imageWrapper.append(imageElement);// .image-wrapper div 안에 이미지 요소를 넣습니다.


// Dot 생성
function createDots() {// 이미지 수만큼 점 네비게이션을 생성하는 함수입니다.
  imageList.forEach((_, index) => { // forEach는 배열을 순회하는 메서드 / _는 첫 번째 매개변수 (요소)**를 "사용하지 않겠다"는 의미로 관례적으로 사용하는 이름.여기선 안 쓰고 index만 쓸 거임!
                                    //forEach((_, index))는 "인덱스만 꺼내 쓰고, 요소는 안 써도 돼요~" 라는 의미예요. 즉 imageList인덱스만큼 순회하겠다
                                    // 각 이미지마다 점(span)을 하나씩 생성합니다.
                               /*💡.forEach(요소, 인덱스)
                                    요소 – 배열 안에 있는 각 항목을 말함
                                    인덱스 – 그 항목이 몇 번째인지 (0, 1, 2, 3...) 알려줍니다
                                    즉, 요소는 'images/1.png' 0번째요소, 'images/2.png' 1번쨰요소, ... 이거 */

    const dot = document.createElement('span');  // 점(span)을 하나 만듭니다.
    dot.addEventListener('click', () => { // 점 클릭 시 해당 이미지로 이동하도록 이벤트를 설정합니다.
      current = index; // 클릭한 점의 인덱스를 현재 인덱스로 설정합니다.
      showSlide(current); // 해당 인덱스의 슬라이드를 화면에 표시합니다.
    });
    dotContainer.append(dot); // 만든 점(span)을 dots 컨테이너에 추가합니다. / 배열안에 들어있음 그래서 총4개가 만들어진다
  });
}


// 썸네일 생성
function createThumbnails() {  // 썸네일 이미지를 생성하는 함수입니다.
  imageList.forEach((src, index) => { // 이미지 경로와 인덱스를 기준으로 반복합니다.
    const thumb = document.createElement('img');// 썸네일용 이미지 태그를 하나 생성합니다.
    thumb.src = src;  // 해당 썸네일의 이미지 경로를 설정합니다.
    thumb.addEventListener('click', () => { // 썸네일을 클릭하면 슬라이드를 전환하는 이벤트입니다.
      current = index; // 클릭한 썸네일의 인덱스를 현재 슬라이드로 설정합니다.
      showSlide(current); // 해당 인덱스의 이미지를 보여주는 함수 실행.
    });
    thumbnailContainer.append(thumb);// 썸네일 이미지를 썸네일 컨테이너에 삽입합니다.
  });
}

function updateDots() {// 점(active) 상태를 갱신하는 함수입니다.
  const dots = dotContainer.querySelectorAll('span');  // 모든 점(span)을 선택합니다.
  dots.forEach((dot, index) => {  // 모든 점을 돌면서 현재 인덱스와 같은 점에만 active 적용.
    dot.classList.toggle('active', index === current);  // 현재 인덱스와 일치하면 active 클래스 추가. / index === current 이 조건이 참이면 active클래스 추가,거짓이면 active클래스 제거
  });
}

function updateThumbnails() { // 썸네일 active 상태를 갱신하는 함수입니다.
  const thumbs = thumbnailContainer.querySelectorAll('img'); // 썸네일 이미지들을 선택합니다.
  thumbs.forEach((thumb, index) => {  // 썸네일을 반복해서 현재 인덱스인 것만 active로 표시.
    thumb.classList.toggle('active', index === current);// 일치하는 썸네일만 강조 효과 줌 
  });
}

function showSlide(index) { // 특정 인덱스의 이미지를 보여주는 함수입니다.
  const newImage = document.createElement('img'); // 새 이미지 요소를 생성합니다.
  newImage.src = imageList[index]; // 해당 인덱스의 이미지 경로를 src로 설정합니다
  newImage.classList.add('show'); // 이미지에 show 클래스를 붙여 CSS 효과 적용

  // fade 전환 처리
  imageWrapper.innerHTML = '';  //⭐⭐⭐ imageWrapper컨테이너의 기존 이미지만을 모두 제거합니다.⭐⭐⭐
  
  imageWrapper.append(newImage);// imageWrapper컨테이너에만 새 이미지를 삽입합니다

  updateDots();  // 점 네비게이션을 현재 위치로 갱신합니다.
  updateThumbnails();// 썸네일 active 상태를 갱신합니다
}

function nextSlide() {  // 다음 슬라이드로 이동하는 함수입니다.
  current = (current + 1) % imageList.length;// 다음 인덱스로 이동, 마지막일 경우 다시 처음으로./ 1 % 4 = 1(1을 4로 나눌 수 없으므로),  2 % 4 = 2, 3 % 4 = 3, 4 % 4 = 0
                                     //💡.length는 배열의 "길이"(=요소 개수)를 나타내는 **속성(property)**입니다.


  showSlide(current); // 이동한 인덱스의 이미지를 표시합니다. 버튼이랑 상관없음
} 

function previousSlide() { // 이전 슬라이드로 이동하는 함수입니다
  current = (current - 1 + imageList.length) % imageList.length; // 인덱스를 감소시키고 음수 방지.
        //(0 - 1 + 4) % 4	= 3번인덱스,   (1 - 1 + 4) % 4	= 0번인덱스,   (2 - 1 + 4) % 4	= 1번인덱스,  (3 - 1 + 4) % 4	= 2번인덱스
  showSlide(current); // 해당 이미지로 전환.
}



function startAutoSlide() { // 자동 슬라이드를 시작하는 함수입니다
  slideInterval = setInterval(nextSlide, 2000); //nextSlide를 실행하고 2초마다 자동으로 슬라이드 넘김 / slideInterval 변수에는 이 반복 작업을 구분하는 ID값"1,2,3...11.12..자동으로 숫자Id값 하나를 반환함
                //setInterval(nextSlide(),2000); 이러면 틀림.  setInterval(function, time)은 함수 이름만 넘겨야지, 괄호 붙이면 즉시 실행됨!
}


function stopAutoSlide() { // 자동 슬라이드를 멈추는 함수입니다.
  clearInterval(slideInterval); //clearInterval(변수(=id값))	해당 id값의 반복을 멈춤 /  이전에 등록된 setInterval을 멈춥니다.
}

// 초기화
createDots();// 점 네비게이션을 생성합니다.
createThumbnails();// 썸네일 이미지를 생성합니다.
showSlide(current);// 현재 슬라이드 이미지를 표시합니다
startAutoSlide();// 자동 슬라이드를 시작합니다.

// 마우스 올리면 멈추고 벗어나면 다시 시작
const carousel = document.querySelector('.carousel'); // .carousel 요소를 선택합니다
carousel.addEventListener('mouseenter', stopAutoSlide); // 마우스 올리면 자동 슬라이드 멈춤.
carousel.addEventListener('mouseleave', startAutoSlide); // 마우스 벗어나면 자동 슬라이드 재시작.



