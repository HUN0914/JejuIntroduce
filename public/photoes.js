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

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
});