// add event listener on multiple elements

const addEventOnElements = function(elements, eventtype, callback){
    for(let i = 0, len = elements.length;i<len;i++){
        elements[i].addEventListener(eventtype, callback);
    }
}


// mobile navbar toggler

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = ()=>{
    navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



// header animation when scrolled down to 100px will be active

const header = document.querySelector("[data-header]");
const backTop = document.querySelector("[data-back-top-btn]");
let lastScrollTop = 0;

window.addEventListener("scroll", ()=>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll Down
        header.classList.add('active');
        backTop.classList.add('active');
    } 
    else {
        // Scroll Up
        header.classList.remove('active');
        backTop.classList.remove('active');
    }
    lastScrollTop = scrollTop;
});



// Slider

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const prevBtn = document.querySelector("[data-slider-prev]");
const nextBtn = document.querySelector("[data-slider-next]");

let totalSlidesVisible = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlideableItems = sliderContainer.childElementCount - totalSlidesVisible;

let currentSlidePos = 0;

const moveSliderItem = function(){
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

// next slide
const slideNext = function(){
    const slideEnd = currentSlidePos >= totalSlideableItems;
    if(slideEnd){
        currentSlidePos = 0;
    }
    else{
        currentSlidePos++;
    }

    moveSliderItem();
}

nextBtn.addEventListener('click', slideNext);

// prev slide
const prevNext = function(){
    if(currentSlidePos <= 0){
        currentSlidePos = totalSlideableItems;
    }
    else{
        currentSlidePos--;
    }

    moveSliderItem();
}

prevBtn.addEventListener('click', prevNext);


// responsive 
window.addEventListener("resize", function(){
    totalSlidesVisible = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    totalSlideableItems = sliderContainer.childElementCount - totalSlidesVisible;

    moveSliderItem();
})


// back to top button
// added to scroll event