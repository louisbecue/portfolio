const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');
const carousel = document.querySelector('.carousel-inner');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
let autoScrollInterval;

function showProject(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function updateCarousel() {
    const visibleProjects = Array.from(projects).filter(project => project.style.display !== 'none');
    currentIndex = Math.min(currentIndex, visibleProjects.length - 1);
    showProject(currentIndex);
}

prevBtn.addEventListener('click', () => {
    const visibleProjects = Array.from(projects).filter(project => project.style.display !== 'none');
    currentIndex = (currentIndex - 1 + visibleProjects.length) % visibleProjects.length;
    showProject(currentIndex);
});

nextBtn.addEventListener('click', () => {
    const visibleProjects = Array.from(projects).filter(project => project.style.display !== 'none');
    currentIndex = (currentIndex + 1) % visibleProjects.length;
    showProject(currentIndex);
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        projects.forEach(project => {
            if (filter === 'all' || project.getAttribute('data-category') === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
        updateCarousel();
    });
});

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        nextBtn.click();
    }, 2500);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

carousel.addEventListener('mouseenter', stopAutoScroll);
carousel.addEventListener('mouseleave', startAutoScroll);
prevBtn.addEventListener('mouseenter', stopAutoScroll);
prevBtn.addEventListener('mouseleave', startAutoScroll);
nextBtn.addEventListener('mouseenter', stopAutoScroll);
nextBtn.addEventListener('mouseleave', startAutoScroll);

startAutoScroll();