let bars = document.querySelector('#bars');
let navUl = document.querySelector('.nav-ul');
let xmark = document.querySelector('.xmark');

    bars.addEventListener('click', ()=>{
        navUl.classList.toggle('navToggle')
    })

    xmark.addEventListener('click', ()=>{
        navUl.classList.remove("navToggle")
    })

var project1 = setInterval(projectDone1, 200);
var project2 = setInterval(projectDone2, 200);
var project3 = setInterval(projectDone3, 200);
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