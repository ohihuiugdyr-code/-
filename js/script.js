
const foodSlider = document.querySelector('.food-slider');
const foodTrack = foodSlider.querySelector('.food-slider__track');
const foodSlides = foodSlider.querySelectorAll('.food-slide');
const foodCurrent = foodSlider.querySelector('.food-slider__current');
const foodPrev = foodSlider.querySelector('.food-slider__prev');
const foodNext = foodSlider.querySelector('.food-slider__next');

let foodIndex = 0;

function updateFoodSlider() {
    foodTrack.style.transform = `translateX(-${foodIndex * 100}%)`;
    foodCurrent.textContent = String(foodIndex + 1).padStart(2, '0');
}

foodNext.addEventListener('click', function() {
    foodIndex++;
    if (foodIndex >= foodSlides.length) foodIndex = 0;
    updateFoodSlider();
});

foodPrev.addEventListener('click', function() {
    foodIndex--;
    if (foodIndex < 0) foodIndex = foodSlides.length - 1;
    updateFoodSlider();
});

let foodStartX = 0;

foodSlider.addEventListener('touchstart', function(event) {
    foodStartX = event.touches[0].clientX;
});

foodSlider.addEventListener('touchend', function(event) {
    const foodEndX = event.changedTouches[0].clientX;
    const foodDistance = foodEndX - foodStartX;

    if (Math.abs(foodDistance) < 50) return;

    if (foodDistance < 0) {
        foodIndex++;
        if (foodIndex >= foodSlides.length) foodIndex = 0;
    } else {
        foodIndex--;
        if (foodIndex < 0) foodIndex = foodSlides.length - 1;
    }

    updateFoodSlider();
});


const interiorSlider = document.querySelector('.interior-slider');
const interiorTrack = interiorSlider.querySelector('.interior-slider__track');
const interiorSlides = interiorSlider.querySelectorAll('.interior-slide');
const interiorCurrent = interiorSlider.querySelector('.interior-slider__current');
const interiorPrev = interiorSlider.querySelector('.interior-slider__prev');
const interiorNext = interiorSlider.querySelector('.interior-slider__next');

let interiorIndex = 0;

function updateInteriorSlider() {
    interiorTrack.style.transform = `translateX(-${interiorIndex * 100}%)`;
    interiorCurrent.textContent = String(interiorIndex + 1).padStart(2, '0');
}

interiorNext.addEventListener('click', function() {
    interiorIndex++;
    if (interiorIndex >= interiorSlides.length) interiorIndex = 0;
    updateInteriorSlider();
});

interiorPrev.addEventListener('click', function() {
    interiorIndex--;
    if (interiorIndex < 0) interiorIndex = interiorSlides.length - 1;
    updateInteriorSlider();
});

let interiorStartX = 0;

interiorSlider.addEventListener('touchstart', function(event) {
    interiorStartX = event.touches[0].clientX;
});

interiorSlider.addEventListener('touchend', function(event) {
    const interiorEndX = event.changedTouches[0].clientX;
    const interiorDistance = interiorEndX - interiorStartX;

    if (Math.abs(interiorDistance) < 50) return;

    if (interiorDistance < 0) {
        interiorIndex++;
        if (interiorIndex >= interiorSlides.length) interiorIndex = 0;
    } else {
        interiorIndex--;
        if (interiorIndex < 0) interiorIndex = interiorSlides.length - 1;
    }

    updateInteriorSlider();
});


const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    mobileMenu.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    mobileMenu.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

burger.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

document.querySelectorAll('.mobile-menu__links a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') closeMobileMenu();
});
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
});

scrollTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
