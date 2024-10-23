//navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//scrolling header 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//scroll
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .about-content p, .about-content h3, .about-content img, .timeline-container', { origin: 'bottom'});
ScrollReveal().reveal('.list .content', { origin: 'left'});
ScrollReveal().reveal('.home-content', { origin: 'right'});


//type js
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineering', 'Application Developer', 'Full Stack Developer'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    loop:true
});


//portofolio
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.portofolio');
let listItemDom = document.querySelector('.portofolio .list');
let thumbnailDom = document.querySelector('.portofolio .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}

prevDom.onclick = function(){
    showSlider('prev');
}

let timeRunning = 3000;
let runTimeOut;

let timeAutoNext = 20000;

let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.portofolio .list .item');
    let itemThumbnail = document.querySelectorAll('.portofolio .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }
    else{
        let positionLastItem = itemSlider.length -1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}


//timeline

// const timeline_wrapper = document.querySelector('.timeline-wrapper');

// timeline_wrapper.addEventListener('mousemove', (event) => {
//     const timeline = document.querySelector('.timeline-content');
//     // let scroll_width = event.pageX /timeline_wrapper.clientWidth*(timeline_wrapper.clientWidth - timeline.clientWidth);

//     // timeline.style.left = scroll_width.toFixed(1) + 'px';
// })

