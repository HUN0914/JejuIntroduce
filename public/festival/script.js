const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

// 카드 개수 확인
const totalCards = document.querySelectorAll(".festival-card").length;

// 슬라이더 업데이트
const updateSlider = () => {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

// 이전 버튼
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// 다음 버튼
nextBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        updateSlider();
    }
});