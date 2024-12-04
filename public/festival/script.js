const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;


const totalCards = document.querySelectorAll(".festival-card").length;


const updateSlider = () => {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
};


prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});


nextBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        updateSlider();
    }
});