const videoData = [
    { link: "https://www.youtube.com/embed/JgtlOLw-3kA", title: "제주도 여행 가이드 영상" },
    { link: "https://www.youtube.com/embed/Ee2N37XvgO4", title: "제주 맛집 추천" },
    { link: "https://www.youtube.com/embed/jt8mcRpvyb8", title: "제주 숨겨진 명소" },
    { link: "https://www.youtube.com/embed/F0nFkt5l4Qg", title: "제주 액티비티" },
    { link: "https://www.youtube.com/embed/F7yWNtsz8Ao", title: "제주 야경 투어" },
    { link: "https://www.youtube.com/embed/O4AKvKN2iQQ?start=3", title : "예랑예랑의 제주 여행 브이로그"},
    { link: "https://www.youtube.com/embed/TZsLmw-Xp_s", title : "제주 2박 3일 브이로그"}

];

const videoContainer = document.getElementById("video-container");
const videoSlider = document.getElementById("video-slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

// 데스크탑 콘텐츠 생성
videoData.forEach(video => {
    const videoWrapper = document.createElement("div");
    videoWrapper.className = "video-wrapper";

    const iframe = document.createElement("iframe");
    iframe.src = video.link;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    const description = document.createElement("div");
    description.className = "video-description";
    description.textContent = video.title;

    videoWrapper.appendChild(iframe);
    videoWrapper.appendChild(description);

    videoContainer.appendChild(videoWrapper);

    // 슬라이더 콘텐츠 생성
    const sliderItem = videoWrapper.cloneNode(true);
    sliderItem.classList.add("slider-item");
    videoSlider.appendChild(sliderItem);
});

// 슬라이더 업데이트
const updateSlider = () => {
    videoSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

// 이전 버튼 클릭
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// 다음 버튼 클릭
nextBtn.addEventListener("click", () => {
    if (currentIndex < videoData.length - 1) {
        currentIndex++;
        updateSlider();
    }
});