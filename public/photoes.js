document.addEventListener('DOMContentLoaded', () => {
    const photoContainer = document.getElementById('photoContainer');
    const scrollLeft = document.getElementById('scrollLeft');
    const scrollRight = document.getElementById('scrollRight');

    scrollLeft.addEventListener('click', () => {
        photoContainer.scrollBy({
            left: -300, 
            behavior: 'smooth'
        });
    });

    scrollRight.addEventListener('click', () => {
        photoContainer.scrollBy({
            left: 300, 
            behavior: 'smooth'
        });ƒ
    });
});


const exploreBtn = document.querySelector('.explore-btn');


exploreBtn.addEventListener('click', (event) => {
    event.preventDefault(); 


    const targetSection = document.querySelector('#photos');

 
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
    });
});

const toggleBtn = document.getElementById('toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
});