document.addEventListener('DOMContentLoaded', () => {
    const blogList = document.getElementById('blog-list');
    const leftButton = document.getElementById('left-btn'); 
    const rightButton = document.getElementById('right-btn'); 
    let currentPage = 1; 
    let isLoading = false; 

    const loadBlogs = async () => {
        if (isLoading) return;
        isLoading = true;

        try {
            const loadingIndicator = document.getElementById('loading-indicator');
            if (loadingIndicator) loadingIndicator.style.display = 'block';

            const response = await fetch(`/api/blogs?query=제주도 맛집&start=${(currentPage - 1) * 10 + 1}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            displayBlogs(data.items);
            currentPage++;
        } catch (error) {
            console.error('데이터 가져오기 실패:', error);
        } finally {
            isLoading = false;

            if (loadingIndicator) loadingIndicator.style.display = 'none';
        }
    };

    const displayBlogs = (blogs) => {
        if (!blogs || blogs.length === 0) {
            blogList.innerHTML += `<p>더 이상 데이터가 없습니다.</p>`;
            return;
        }

        blogs.forEach((blog) => {
            const blogCard = document.createElement('div');
            blogCard.classList.add('blog-card');
            
            blogCard.onclick = () => {
                window.open(blog.link, '_blank'); 
            };
        
            blogCard.innerHTML = `
                <h3>${blog.title.replace(/<[^>]*>?/gm, '')}</h3>
                <p>${blog.description.replace(/<[^>]*>?/gm, '')}</p>
            `;
            blogList.appendChild(blogCard);
        });
    };

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight; 
        const scrollTop = document.documentElement.scrollTop || window.scrollY; 
        const clientHeight = document.documentElement.clientHeight; 

        if (scrollTop + clientHeight >= scrollHeight - 50) {
            loadBlogs();
        }
    });

    leftButton.addEventListener('click', () => {
        blogList.scrollBy({
            left: -300, 
            behavior: 'smooth', 
        });
    });

    rightButton.addEventListener('click', () => {
        blogList.scrollBy({
            left: 300, 
            behavior: 'smooth', 
        });
    });

    loadBlogs();
});