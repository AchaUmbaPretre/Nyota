let bars = document.querySelector('#bars');
let navUl = document.querySelector('.nav-ul');
let xmark = document.querySelector('.xmark');

    bars.addEventListener('click', ()=>{
        navUl.classList.toggle('navToggle')
    })

    xmark.addEventListener('click', ()=>{
        navUl.classList.remove("navToggle")
    })

var project1 = setInterval(projectDone1, 100);
var project2 = setInterval(projectDone2, 100);
var project3 = setInterval(projectDone3, 100);
let count1 = 1;
let count2 = 1;
let count3 = 1;

function projectDone1(){
    count1++;

    document.querySelector('#number1').innerHTML = count1;
    if(count1 === 45){
        clearInterval(project1)
    }
}

function projectDone2(){
    count2++;

    document.querySelector('#number2').innerHTML = count2;
    if(count2 === 35){
        clearInterval(project2)
    }
}

function projectDone3(){
    count3++;

    document.querySelector('#number3').innerHTML = count3;
    if(count3 === 7){
        clearInterval(project3)
    }
}


const allCross = document.querySelectorAll('.question-row');

allCross.forEach(element=>{
    element.addEventListener('click', ()=>{
        element.classList.toggle('active')
        console.log('bonjour')
    })
})

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
sr.reveal(`.counter-rows`, {delay: 800,origin:'top',origin: 'bottom', interval: 100})
sr.reveal(`.question-rows`, {delay: 500, origin: 'bottom', interval: 100})
sr.reveal(`.actualite-rows`, {delay: 500, origin: 'bottom', interval: 100})
sr.reveal(`.contact-left`, {origin:'left'})
sr.reveal(`.contact-right`, {origin:'right'})
sr.reveal(`.footer`, {origin:'bottom'})