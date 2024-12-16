// 슬라이더 항목들
const sliderItems = document.querySelectorAll('.slider-item');

// 현재 슬라이드 인덱스
let currentIndex = 0;

// 버튼 DOM 요소
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// 슬라이드 전환 함수
function showSlide(index) {
    // 모든 슬라이드에서 active 클래스 제거
    sliderItems.forEach((item) => {
        item.classList.remove('active');
    });

    // 현재 인덱스의 슬라이드에 active 클래스 추가
    sliderItems[index].classList.add('active');
}

// 이전 버튼 클릭 이벤트
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    showSlide(currentIndex);
});

// 다음 버튼 클릭 이벤트
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
});

// 자동 슬라이드 (5초마다 슬라이드 전환)
setInterval(() => {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
}, 5000);

// 페이지 로드 시 초기 슬라이드 표시
showSlide(currentIndex);