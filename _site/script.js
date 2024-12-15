// 슬라이더와 이미지
const slider = document.getElementById("slider");
const images = document.querySelectorAll(".slider-image");

// 현재 슬라이더 상태
let currentIndex = 0;

// 버튼 DOM 요소
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// 이미지 전환 함수
function moveSlide(direction) {
    const totalSlides = images.length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides; // 순환 처리
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; // 슬라이더 이동 (백틱 사용)
}

// 버튼 클릭 이벤트
prevBtn.addEventListener("click", () => moveSlide(-1));
nextBtn.addEventListener("click", () => moveSlide(1));

// 자동 슬라이드
setInterval(() => moveSlide(1), 3000);
