const videoData = [
    { link: "https://www.youtube.com/embed/JgtlOLw-3kA", title: "제주도 여행 가이드 영상" },
    { link: "https://www.youtube.com/embed/Ee2N37XvgO4", title: "제주 맛집 추천" },
    { link: "https://www.youtube.com/embed/jt8mcRpvyb8", title: "제주 숨겨진 명소" },
    { link: "https://www.youtube.com/embed/F0nFkt5l4Qg", title: "제주 액티비티" },
    { link: "https://www.youtube.com/embed/F7yWNtsz8Ao", title: "제주 야경 투어" },
    { link: "https://www.youtube.com/embed/O4AKvKN2iQQ?start=3", title: "예랑예랑의 제주 여행 브이로그" },
    { link: "https://www.youtube.com/embed/TZsLmw-Xp_s", title: "제주 2박 3일 브이로그" }
];

let currentSlide = 0;

function createVideoCard(video) {
    return `
        <div class="video-card">
            <div class="video-wrapper">
                <iframe 
                    src="${video.link}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
            </div>
        </div>
    `;
}


const gridContainer = document.getElementById('video-grid');
gridContainer.innerHTML = videoData.map(createVideoCard).join('');


const sliderContainer = document.getElementById('slider');
sliderContainer.innerHTML = videoData.map(video => 
    `<div class="slider-card">${createVideoCard(video)}</div>`
).join('');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === videoData.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < videoData.length - 1) {
        currentSlide++;
        updateSlider();
    }
});

updateSlider();