const spotData = {
    spring: {
        title: "봄 포토스팟",
        spots: [
            {
                title: "한림공원",
                description: "매년 봄마다 활짝 피는 벚꽃과 튤립이 장관을 이루는 곳",
                location: "제주시 한림읍",
                image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA3MjlfMTc1%2FMDAxNzIyMjQ1MDQ0MTI5.uJOuEhVaGVvDRZsZEet5sXk1IafOeBvwvxG2YyPn_U0g.-B3FhGj_0FEngXHLdNSsh6J48oL1V4VoqFXDXkXsImYg.JPEG%2FIMG_6319.jpg&type=a340"
            },
            {
                title: "녹산로 유채꽃길",
                description: "끝없이 펼쳐진 노란 유채꽃밭과 푸른 하늘이 어우러진 포토스팟",
                location: "제주시 구좌읍",
                image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110425_102%2Fchen9233_1303669769803GiVQ2_JPEG%2FIMGP5518.jpg&type=a340"
            }
        ]
    },
    summer: {
        title: "여름 포토스팟",
        spots: [
            {
                title: "협재해변",
                description: "에메랄드빛 바다와 하얀 모래사장이 아름다운 해변",
                location: "제주시 한림읍",
                image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMjVfMjIz%2FMDAxNjk4MTkxMzM0MDY4.ZeXujgca0YSho6L6Q1bd87Z3T6yocuhDC5KZpBzPP7Eg.jaObLVcsZejZicbiVzdlw2rIEv6DIIZ7VFVMWV5uRJgg.JPEG.theblackqw%2F%25C1%25A6%25C1%25D6%25B1%25DD%25B4%25C9%25C7%25F9%25C0%25E7%25C7%25D8%25BA%25AF101723-7986-1.JPG&type=sc960_832"
            },
            {
                title: "형제섬",
                description: "푸른 바다 위에 떠 있는 두 개의 섬이 만드는 환상적인 풍경",
                location: "서귀포시 서귀동",
                image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTVfMTY0%2FMDAxNjY4NTA0NTcyNzMy.9xZOBB_zo0oPTJET9cmtsWyqR32IiZpgCsA5ieYtiesg.0GCdsJmZNKG3Ab9UC3U6H1YIyX5ZipKles0Lli3r3Akg.JPEG.whan903%2F091024-4.jpg&type=a340"
            }
        ]
    },
    autumn: {
        title: "가을 포토스팟",
        spots: [
            {
                title: "산굼부리",
                description: "가을 억새가 황금빛으로 물드는 아름다운 분화구",
                location: "제주시 조천읍",
                image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMThfMTIw%2FMDAxNjk3NjA4NTE2MjY1.zM3JPh80UWvY5fUUvJQhMesKlB92oszCDCiiY7PHe5Ag.Y6gAFFbD9IONxAZvxzBD5HbKpgCz7fpiPjXEz07ipfkg.JPEG.msjh1012%2F%25BB%25EA%25B1%25C0%25BA%25CE%25B8%25AE9-2.jpg&type=a340"
            },
            {
                title: "사려니숲길",
                description: "단풍과 억새가 어우러진 아름다운 숲길",
                location: "제주시 봉개동",
                image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MjNfNTMg%2FMDAxNzI0Mzg4NzQyMTY5.sPbokY5C1SX-Qm_RfSKoil5FmT4Lz8jR4pq1pYqJOtwg.KR1Myp0y5XFqZUpQWzivbfepk3cW2eLt-raTtRsaUnIg.JPEG%2FSNOW%25A3%25DF20240802%25A3%25DF145426%25A3%25DF470.jpg&type=a340"
            }
        ]
    },
    winter: {
        title: "겨울 포토스팟",
        spots: [
            {
                title: "한라산 설경",
                description: "하얀 눈으로 덮인 한라산의 환상적인 겨울 풍경",
                location: "제주시 한라산국립공원",
                image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTdfMjkx%2FMDAxNjEzNTY3NDY0MDky.wzCDyi3FkR1tKQFtN7xOY8cobh0YcOawRl4CYXIUW1kg.mLW8GNCsho4GNOPB4hpJS4iP1EciQnsOrvzNrinK8XEg.JPEG.htd305%2F1613567174841.jpg&type=a340"
            },
            {
                title: "카멜리아힐",
                description: "겨울에 피어나는 붉은 동백꽃의 향연",
                location: "서귀포시 안덕면",
                image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA3MTJfMjE4%2FMDAxNzIwNzUxOTM1ODg4.hBX5wyaOCfWgJFTUfflGlSTN2iw8GYvmbEMJvXcdyFEg.UxcQgjE3llAMuEAR810CrT3p84W75FeqRJ8Bo1a792Eg.JPEG%2F20240614%25A3%25DF134356.jpg&type=a340"
            }
        ]
    }
};

function renderContent(season = 'all') {
    const container = document.getElementById('content-container');
    
    if (season === 'all') {
        container.innerHTML = `
            <div class="photo-grid">
                ${Object.values(spotData).map(seasonData => 
                    createSpotCard(seasonData.spots[0])
                ).join('')}
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="photo-grid">
                ${spotData[season].spots.map(spot => 
                    createSpotCard(spot)
                ).join('')}
            </div>
        `;
    }
}

function createSpotCard(spot) {
    return `
        <div class="photo-card">
            <img src="${spot.image}" alt="${spot.title}" loading="lazy">
            <div class="photo-info">
                <h3>${spot.title}</h3>
                <p>${spot.description}</p>
                <div class="location-info">
                    <i class="fas fa-map-marker-alt"></i>
                    ${spot.location}
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.season-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            
            const container = document.getElementById('content-container');
            container.style.opacity = '0';
            setTimeout(() => {
                renderContent(tab.dataset.season);
                container.style.opacity = '1';
            }, 300);
        });
    });

    
    renderContent('all');

    
    const container = document.getElementById('content-container');
    container.style.transition = 'opacity 0.3s ease';
});