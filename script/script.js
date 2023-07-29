let bars = document.querySelector('#bars');
let navUl = document.querySelector('.nav-ul');
let xmark = document.querySelector('.xmark');

    bars.addEventListener('click', ()=>{
        navUl.classList.toggle('navToggle')
    })

    xmark.addEventListener('click', ()=>{
        navUl.classList.remove("navToggle")
    })

//counter
let nums =  document.querySelectorAll('.counter .counter-h1');
let statsCounter = document.querySelector('.counter');
let started = false;

window.onscroll = function(){
    if(window.scrollY >= statsCounter.offsetTop){
        if(!started){
            nums.forEach((num)=> startCount(num));
        }
        started = true;
    }
};

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;

        if(el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}


const allCross = document.querySelectorAll('.question-row');
const icons = document.querySelectorAll('.icons-plus')
allCross.forEach(element=>{
    element.addEventListener('click', ()=>{
        element.classList.toggle('active')
    })
})

//ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.slider-h1`, {origin:'right'})
sr.reveal(`.slider-btn`, {origin:'bottom'})
sr.reveal(`.slider-desc`, {origin:'left'})
sr.reveal(`.apropos-right`, {origin:'right'})
sr.reveal(`.experience-row`, {delay: 500, origin: 'bottom', interval: 100})
sr.reveal(`.apropos-left`, {origin:'left'})
sr.reveal(`.apropos-right`, {origin:'right'})
sr.reveal(`.count1`, {delay: 500,origin:'top',origin: 'bottom', interval: 100})
sr.reveal(`.count2`, {delay: 800,origin:'top',origin: 'bottom', interval: 100})
sr.reveal(`.count3`, {delay: 900,origin:'top',origin: 'bottom', interval: 100})
sr.reveal(`.count4`, {delay: 1000,origin:'top',origin: 'bottom', interval: 100})
/* sr.reveal(`.counter-rows`, {delay: 800,origin:'top',origin: 'bottom', interval: 100}) */
sr.reveal(`.question-rows`, {delay: 500, origin: 'bottom', interval: 100})
sr.reveal(`.actualite-rows`, {delay: 500, origin: 'bottom', interval: 100})
sr.reveal(`.contact-left`, {origin:'left'})
sr.reveal(`.contact-right`, {origin:'right'})
sr.reveal(`.footer`, {origin:'bottom'})
sr.reveal(`.sport-img`, {origin:'left'})
sr.reveal(`.desc-sport`, {origin:'right'})
sr.reveal(`.sport-center-img`, {origin:'left'})

//ScrollUp
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 500) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
